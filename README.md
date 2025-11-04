# Install:
  - install SF PRO font
  - SF PRO font is located at /documents/SF-Pro.dmg
  reference: https://developer-apple-com.translate.goog/fonts/?_x_tr_sl=en&_x_tr_tl=vi&_x_tr_hl=vi&_x_tr_pto=tc

```markdown
  yarn

  yarn dev # for development
  yarn storybook # open storybook
```


# Q & A
1. How to Update Icons
- step 0: get svg of an icon on Figma then convert it to React component by a tool like [svg-to-react-jsx](https://www.svgviewer.dev/svg-to-react-jsx)
- step 1: Create Icon component. For example open src/components/ui/icon/Menu.tsx to see structure
  Make sure to edit color if any. It's often as replacing a fixed color to `"currentColor"`
- step 2: Run script: `yarn generate-icons`
    Above command will update content inside:
      - src/components/ui/icon/index.ts
      - src/components/ui/icon/icons.stories.tsx
  step 3: Verify it at Storybook