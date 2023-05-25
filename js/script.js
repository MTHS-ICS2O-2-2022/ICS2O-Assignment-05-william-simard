// Copyright (c) 2023 william simard All rights reserved
//
// Created by: wiilliam simard
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */

// program to generate fibonacci series up to a certain number

// take input from the user
const fibonacci = (n) => {
  let a = 0,
    b = 1,
    c = n

  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }

  return c
}
