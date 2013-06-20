viewport-reset
==================

When using the tag: <pre><code>&lt;meta viewport&gt;</code></pre> to target mobile screens, sometimes you don't want to target all devices that recognize this tag.

For example, if you want a viewport to load in 'device-width' for iPhones, but not for iPads.

This javascript snippet will need to be added directly after the metatags in the html head.

You can change the value of the if condition to target different widths. The widths larger than the defined value will have the viewport reset to the default value.

<pre><code>if (viewport.width > 640)</pre></code>
