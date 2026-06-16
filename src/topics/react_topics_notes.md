# React Topics
1.Props:-
    props stands for Properties.
    sending data from paraent component to child component

2.Jsx Expression:-
    
3.Conditional Rendering:-
    based open a condition which component we want to see and which component we dont want show this determine the conditional rendering
   --> data ?: any js inbuilt method
       null   undefeind
   --> data ?? excute
       null undefeind
   -->data && execute
       truthy value
   -->condition? true:false 
   --> res= data
          truthy value
        res=data || default value
            falsy 
4.reference based heap. non primetive sotre reference.
5.value based satck 
6.Hooks:-
        Hooks are nothing but predefined funtions.
  Types of Hooks:-
       There are 2 types of hooks in react js .
       1.Predefined hooks
       2.custom hooks
    Rules of Hooks:-
      Rule 1:- Always hooks prefix with use word.
      Rule 2:- Hooks are always need to call at the top lavel of the component.
      
   1.Predefined hooks:-
       1.UseState():- It is use to manage the state inside a component.
                     Example :- it helps to store the data and update the data dynamically.
                     --> This hook always return an array having 2 value.
                     --> First value is intial value and 2 value is a function to update the intial value.