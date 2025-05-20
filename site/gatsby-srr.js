export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script key="svg-js" src="/js/svg.min.js" async={false} />,
    <script key="svg-draw-js" src="/js/svg.draw.min.js" async={false} />,
  ]);
};
