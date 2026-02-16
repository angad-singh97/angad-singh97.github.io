---
title: "The RISC-V Weak Memory Model: Why I Needed Assembly Fences"
description: "How RISC-V's relaxed memory ordering caused DMA descriptor races—and how FENCE instructions fixed it."
pubDate: 2025-02-15
draft: false
---

*Placeholder post. Full deep dive coming soon.*

When building a custom DPDK Poll Mode Driver for a proprietary FPGA NIC on RISC-V hardware, I hit a subtle bug: DMA descriptors were occasionally written out of order, causing packet corruption. The culprit? **RISC-V's weak memory model**.

Unlike x86's strong TSO (Total Store Ordering), RISC-V allows the CPU to reorder memory operations for performance. In our driver, we:

1. Fill DMA descriptor rings in memory
2. Write a doorbell register to tell the NIC "descriptors are ready"
3. The NIC DMA-reads the descriptors

Without explicit ordering, the CPU could reorder (2) before (1) completes—the NIC would read garbage. The fix: inject `FENCE` instructions to enforce ordering:

```c
// Ensure all descriptor writes are visible before doorbell
__asm__ volatile ("fence w, w" ::: "memory");
*doorbell_reg = 1;
__asm__ volatile ("fence w, o" ::: "memory");
```

This post will cover RISC-V's memory model, when you need fences, and how we validated the fix. Stay tuned.
