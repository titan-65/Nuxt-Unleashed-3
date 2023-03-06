import { describe, test, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";
import { useRewards } from "/composables/useRewards.ts";


describe("Rewards Test", async () => {
  const { calculateRewards } = useRewards()

  await setup({

  });
  it("Check Rewards", () => {
    const rewards = calculateRewards(100)
    expect(rewards).toBe(5500)
  })

  test("Rewards should be calculated", () => {
    // Test
    const rewards = calculateRewards(200)
    expect(rewards)
  })
});


