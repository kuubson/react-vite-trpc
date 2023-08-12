const breakpoints = {
   largeDesktop: '1600px',
   desktop: '900px',
   tablet: '768px',
   smallTablet: ' 500px',
   mobile: '400px',
}

export const mediaQueries = {
   largeDesktop: `(max-width: ${breakpoints.largeDesktop})`,
   desktop: `(max-width: ${breakpoints.desktop})`,
   tablet: `(max-width: ${breakpoints.tablet})`,
   smallTablet: `(max-width: ${breakpoints.smallTablet})`,
   mobile: `(max-width: ${breakpoints.mobile})`,

   minLargeDesktop: `(min-width: ${breakpoints.largeDesktop})`,
   minDesktop: `(min-width: ${breakpoints.desktop})`,
   minTablet: `(min-width: ${breakpoints.tablet})`,
   minSmallTablet: `(min-width: ${breakpoints.smallTablet})`,
   minMobile: `(min-width: ${breakpoints.mobile})`,
}
