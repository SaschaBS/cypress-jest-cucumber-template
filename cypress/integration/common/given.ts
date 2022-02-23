import {Given} from "cypress-cucumber-preprocessor/steps";
import openWebsite from "../support/openWebsite";
import interceptNumberOfItems from "../support/interceptNumberOfItems";


Given(
  /^I open the page "([^"]*)?"$/,
  openWebsite
);

Given(/^I open the start page/, () => openWebsite('/'));


//
// Given(
//   /^the element "([^"]*)?" is( not)* displayed$/,
//   isDisplayed
// );
//
// Given(
//   /^the element "([^"]*)?" is( not)* enabled$/,
//   isEnabled
// );
//
// Given(
//   /^the element "([^"]*)?" is( not)* selected$/,
//   checkSelected
// );
//
// Given(
//   /^the checkbox "([^"]*)?" is( not)* checked$/,
//   checkSelected
// );
//
// Given(
//   /^there is (an|no) element "([^"]*)?" on the page$/,
//   checkElementExists
// );
//
// Given(
//   /^the title is( not)* "([^"]*)?"$/,
//   checkTitle
// );
//
// Given(
//   /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
//   compareText
// );
//
// Given(
//   /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
//   checkEqualsText
// );
//
// Given(
//   /^the (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
//   checkContainsText
// );
//
// Given(
//   /^the (button|element) "([^"]*)?"( not)* contains any text$/,
//   checkContainsAnyText
// );
//
// Given(
//   /^the (button|element) "([^"]*)?" is( not)* empty$/,
//   checkIsEmpty
// );
//
// Given(
//   /^the page url is( not)* "([^"]*)?"$/,
//   checkUrl
// );
//
// Given(
//   /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
//   checkProperty
// );
//
// Given(
//   /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
//   checkCookieContent
// );
//
// Given(
//   /^the cookie "([^"]*)?" does( not)* exist$/,
//   checkCookieExists
// );
//
// Given(
//   /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
//   checkDimension
// );
//
// Given(
//   /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
//   checkOffset
// );
//
// Given(
//   /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
//   setWindowSize
// );
//
// Given(
//   /^I have closed all but the first (window|tab)$/,
//   closeAllButFirstTab
// );
//
// Given(
//   /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
//   checkModal
// );


Given(/^the server contains "([^"]*)" items$/, interceptNumberOfItems);
