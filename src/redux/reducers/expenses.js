 const ExpensesReducer = (state={},action)=>
{
    switch(action.type)
    {
        default:return {...state,expensesList:action.payload}
    }

}
export default ExpensesReducer;
