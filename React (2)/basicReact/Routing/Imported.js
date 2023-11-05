function SumDOM() {
    return <h2>This is an imported heading</h2>;
};

// /* You can import and memo function to export inside of it. That will increase the performance of the page */
// memo makes the component only render when it has to when its property changed but if it doesn't it will not re-render

export default {SumDOM};
