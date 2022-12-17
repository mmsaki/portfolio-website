---
title: "Crpto Forex Tools: Aave Flashloans"
date: "2022-09-28"
author: "Meek Msaki"
---

[**GitHub Repository**](https://github.com/mmsaki/rush)

## Rush Finance Forex Tool

I made this forex tool so I can onboard many defi users to use flashloans on lending protocols i.e. Aave and remain with `0` debt.

## Summary

Aave v3 Core lending pool allows you to borrow assets using flashloan contracts. If your goal is to stay debt-free, you can borrow crypto assets as needed as long as you can prove that you have enough collateral. You need to understand the risks of financial burdens from borrowing assets and getting liquidated, especially when market movements are volatile and against you. In order to avoid maximum losses, the only strategy you have left is using flashloans.

With this project, my goal is to provide you with a forex tool to help you maximize your borrowing power and debt positions. If you have provided collateral on Aave before, this might be of great use to you. All DeFi users, with or without technical backgrounds, can learn how to use flashloans without any complications. We want to ensure our forex tool provides secure interactions with Aave's lending pools using flashloan receiver smart contracts. You only have to pay a flashloan premium fee, currently at 0.09%.

| :warning: WARNING                                                                                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| I should warn you. Extensively using flashloans without understanding the what you are doing can cause a major loss through fees. Be carefull with this tool. |

## Getting Started

The set up is easy. Rush is an open source project the tool is accessible to everyone. I am in the build process of to make clean up the projects code base. I hope to make flashloans easy for to everyone to understand. See the demo transactions in the next segment. Work in progress...

Check back later. 👷

<>

## Transactions Reference

See examples below of flashloan transations and how they are submitted. From these results aave fees for $1,000,000 flashloan is $500.

- [1 million USDC flashloan - Etherscan](https://goerli-optimism.etherscan.io/tx/0xe7b6883bc925eef37d318efa3353a24a74ef7b04fd9e2ba2a8bdfa1116d8f1a2)
- [100 + million Tokens flashloan - Etherscan](https://goerli-optimism.etherscan.io/tx/0xb096db8fbf39c390f343603d9dc51bd7ed41f51a47124cb6b1bdb3007f7f7a76)

## Aave Flash loan fee

The flash loan fee is initialized at deployment to `0.09%` which is updated via aave Governance Vote.

- Flashloan fee can be shared by the LPs (liquidity providers) and the protocol treasury.

- The `premium_total` represents the total fee paid by the borrowers of which:

  - Fee to LP = `premium_total` - `flashloan_premium_to_protocol`

  - Fee to Protocol = `flashloan_premium_to_protocol`

## Setting Up

- Ensure we have enough funds when flashloaning
- Calculate the profitability of liquidating loans vs gas costs
- Fail safe security by using a testnet like Goerli before moving to mainnet
- You can find Aave contracts annd registries [Testnet Aave Contract Addresses](https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses)

## Sponsor

- Aave
