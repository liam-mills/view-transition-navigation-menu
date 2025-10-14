# View Transition Navigation Menu

This is a demo using View Transitions to transition a CSS pseudo element attached to the active navigation menu item.
No JavaScript required.

Other view transitions will also work, as they explicitly use a different `view-transition-name`.

## A Note On Shared Component Styles

Styles within the <Layout> and <Navigation> layouts are marked as global (`is:global`). This is required so that the styling can persist across pages and is readily accessible for when the view transition commences.

If the view transition related styling is placed into a shared CSS file this is unneeded.

Logically however, within the context of this example (and most sites where you would use a main generic layout and have navigation on every page) because these layouts are used on all pages anyway, having them be global is fine.