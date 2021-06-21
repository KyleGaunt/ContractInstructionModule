import {sum} from "../SystemTests";
import {pageExistsCreateNewCI, viewElementCreateNewCI, dividerElementCreateNewCI, textElementCreateNewCI, textInputElementCreateNewCI, touchableOpacityElementCreateNewCI} from "../tests/CreateNewCITests";
import {pageExistsEditMyProfile, viewElementEditMyProfile, dividerElementEditMyProfile, textElementEditMyProfile, textInputElementEditMyProfile, touchableOpacityElementEditMyProfile} from "../tests/EditCITests";
import {pageExistsViewCI, viewElementViewCI, dividerElementViewCI, textElementViewCI, textInputElementViewCI, touchableOpacityElementViewCI} from "../tests/ViewCITests";

test('Logical test intentionally designed to PASS', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Logical test intentionally designed to FAIL', () => {
  expect(sum(1, 1)).toBe(3);
});

test('CreateNewCI: Page exists', () => {
  expect(pageExistsCreateNewCI()).toBe(true);
});

test('CreateNewCI: View element loaded', () => {
  expect(viewElementCreateNewCI()).toBe(true);
});

test('CreateNewCI: Divider element loaded', () => {
  expect(dividerElementCreateNewCI()).toBe(true);
});

test('CreateNewCI: Text element loaded', () => {
  expect(textElementCreateNewCI()).toBe(true);
});

test('CreateNewCI: Text Input element loaded', () => {
  expect(textInputElementCreateNewCI()).toBe(true);
});

test('CreateNewCI: Touchable Opacity element loaded', () => {
  expect(touchableOpacityElementCreateNewCI()).toBe(true);
});

test('EditMyProfile: Page exists', () => {
  expect(pageExistsEditMyProfile()).toBe(true);
});

test('EditMyProfile: View element loaded', () => {
  expect(viewElementEditMyProfile()).toBe(true);
});

test('EditMyProfile: Divider element loaded', () => {
  expect(dividerElementEditMyProfile()).toBe(true);
});

test('EditMyProfile: Text element loaded', () => {
  expect(textElementEditMyProfile()).toBe(true);
});

test('EditMyProfile: Text Input element loaded', () => {
  expect(textInputElementEditMyProfile()).toBe(true);
});

test('EditMyProfile: Touchable Opacity element loaded', () => {
  expect(touchableOpacityElementEditMyProfile()).toBe(true);
});

test('ViewCI: Page exists', () => {
  expect(pageExistsViewCI()).toBe(true);
});

test('ViewCI: View element loaded', () => {
  expect(viewElementViewCI()).toBe(true);
});

test('ViewCI: Divider element loaded', () => {
  expect(dividerElementViewCI()).toBe(true);
});

test('ViewCI: Text element loaded', () => {
  expect(textElementViewCI()).toBe(true);
});

test('ViewCI: Text Input element loaded', () => {
  expect(textInputElementViewCI()).toBe(true);
});

test('ViewCI: Touchable Opacity element loaded', () => {
  expect(touchableOpacityElementViewCI()).toBe(true);
});
