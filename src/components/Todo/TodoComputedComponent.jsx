const TodoComputedComponent = ({ computedItems, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4">
            <span className="text-gray-400">{computedItems} items left</span>
            <button className="text-gray-400" onClick={clearCompleted}>
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputedComponent;
