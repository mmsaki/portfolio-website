---
title: 'Aave Flashloans'
date: '2022-09-28'
author: 'Meek Msaki'
---

[**GitHub Repository**](https://github.com/mmsaki/rush)

## Rush Finance Forex Tool

Rush makes it easy for defi users to use flashloans on Aave's lending pool and remain with `0` debt.

## Summary

Aave v3 Core lending pool allows you to borrow assets using flashloan contracts. You can borrow crypto assets as needed so long as you can proof that you have enough collateral. The goal is to stay debt free forever. You need to understand the risks of financial burdens from borrowing assets and getting liquidated especially when the maket movements are volatile and against you. In order to avoid max losses, the only strategies you have left are flashloans.

With Rush, my goal is to provide you with a forex tool to help you maximize your borrowing power and debt positions. If you have supplied collateral on Aave before, this might be of great use to you. All Defi users, with or without technical backgrounds, can learn how to use flashloans without any complications. We want to ensure our forex tool provides secure interactions with Aave's lending pools using flashloan receiver smart contracts. You only have to pay a flashloan premium fee currently at `0.09%`.

| :warning: WARNING          |
|:---------------------------|
| I should warn you. You will not make any profits from using flashloans as they are on this repo.      |

## Getting Started

```python
from brownie import interface
from scripts.aave.helper_functions import get_lending_pool, get_accounts, get_account
from scripts.aave.helper_functions import get_stable_token, get_variable_token
from scripts.aave.helper_functions import get_atoken

def pretty_table(rows, column_count, column_spacing=4):
    aligned_columns = []
    for column in range(column_count):
        column_data = list(map(lambda row: row[column], rows))
        aligned_columns.append((max(map(len, column_data)) + column_spacing, column_data))

    for row in range(len(rows)):
        aligned_row = map(lambda x: (x[0], x[1][row]), aligned_columns)
        yield ''.join(map(lambda x: x[1] + ' ' * (x[0] - len(x[1])), aligned_row))

```



## How It's Made

- We used Aave V3 Core contracts to build Rush.

    ↳ We deployed to Optimism Goerli for testing

    ↳ We deployed two contracts

  - `RushFlashLoan`
    - For borrowing multiple tokens
  - `RushSimpleFlashLoan`
    - For borrowing a single token

    ↳ We ensure we have enough funds to pay flashloan fee.

    ↳ We call `.flashloan( )` on the lending pool contract

  - Our `RushFlashloan` contract will receive the funds and repay to aave with a flashloan fee.
    - We can add multiple tokens by providing the array of tokens and amounts we want to borrow.
    - With enough net-worth you can borrow upto millions!

- [1 million USDC flashloan - Etherscan](https://goerli-optimism.etherscan.io/tx/0xe7b6883bc925eef37d318efa3353a24a74ef7b04fd9e2ba2a8bdfa1116d8f1a2)
- [100 + million Tokens flashloan - Etherscan](https://goerli-optimism.etherscan.io/tx/0xb096db8fbf39c390f343603d9dc51bd7ed41f51a47124cb6b1bdb3007f7f7a76)

## Aave Flash loan fee

- The flash loan fee is initialized at deployment to `0.09%` which is updated via aave Governance Vote. Use `FLASHLOAN_PREMIUM_TOTAL` to get current value.

  - Flashloan fee can be shared by the LPs (liquidity providers) and the protocol treasury.

  - The `premium_total` represents the total fee paid by the borrowers of which:

    - Fee to LP = `premium_total` - `flashloan_premium_to_protocol`

    - Fee to Protocol = `flashloan_premium_to_protocol`

- Still working on other features...

<!-- - Setting Up
    - Ensure we have enough funds when flashloaning
    - Calculate the profitability of liquidating loans vs gas costs
    - Ensure we have access toe the latest protocol user data
    - Fail safe security 
- Aave contracts and registry on Optimism 
    - [V3 Testnet Aave Address on Optimism Görli](https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses) -->

## Roadmap

- [x] Create Project
  - [Loan Rush](https://ethglobal.com/showcase/rush-8s2mf)
- [ ] Checkin #1
  - Update: We Missed checkin #1
- [x] Create Logo
  - [Rush logo]()
- [x] Create Discord
  - [Discord](https://discord.gg/57TA3bHx62)
- [x] Submit Checkin #2
  - How is the project coming along?
- [x] Create scripts
  - deploy_flashloan.py
  - aave_balances.py
  - run_flashloan.py
  - simple_flashloan.py
  - supply_token.py
  - withdraw_token.py
- [x] Project feedback Session Thu, Sep 15 02:00 PM
- [x] Create Presentation Sun, Sep 18 11:00 AM
- [ ] Bonus
  - Front end landing page
  - Users can connect metamask
  - User can call deposit WETH function
  - User can send flashloan
- [x] Project Check-in #3 Tue, Sep 20 11:00 AM
  - Is everything going as expected?
  - What are some things you need help with?
  - What do you need to complete your project?
- [x] Project feedback Session Wed, Sep 21 02:00 PM
  - Present project for feedback
- [x] ETHOnline Summit Fri, Sep 23 11:00 AM
  - If ready submit project
  - Record Video demonstration on how to use rush
- [x] Submissions Due! Sun, Sep 25 02:00 PM
  - Submit project by 2:00pm
- [x] Project Judging Mon, Sep 26 11:00 AM
  - Present to judges and sponsors

## Sponsors

- Aaave
