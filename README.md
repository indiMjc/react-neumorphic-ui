# **Required dependencies for use: `@emotion/core` (for all components), `react-router-dom` for (`<NeuNavbar />` component)**

###### _Developed on version 10.0.27_

##### Optional dependency for performance: `@emotion/babel-preset-css-prop`, add to `.bablerc` file under `presets` field

## Components

-  `<NeuButton />`

   -  Optional props for styling (_**all** props take strings_):

      -  clickFn (onClick submit function)

      -  type (for `type='submit'` on forms)

      -  width

      -  height

      -  background color

      -  color

      -  font size

      -  font weight

      -  padding

      -  margin

      -  border

      -  border radius

   _Example usage:_

   ```
   <NeuButton
       text={'Submit'}
       clickFn={fetchData}
       margin={'2rem 0 0'}
       padding={'1rem'}
       borderRadius={'0rem'}
   />
   ```

-  `<NeuNavbar />`
