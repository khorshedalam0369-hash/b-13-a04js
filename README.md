Answers to Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: Selects a single element using its unique ID.

getElementsByClassName: Selects all elements with a specific class name and returns them as a collection HTMLCollection.

querySelector / querySelectorAll:querySelector finds the first element that matches a CSS selector, while querySelectorAll finds all matching elements and returns them as a NodeList.



2. How do you create and insert a new element into the DOM?
Creating and Displaying a new element in the UI involves three steps

Step 1 . Crate the Element

Use The document.createElement('div') method to create an element in memory.
Example: const div = document.createElement('div')
Create a < div> tag
Step 2 . Add Styles or Content

After creating the element, need to add content or styling so it looks right in the UI.
add text div.innerText = 'ramadan mubarak'
add styles div.classList.add('styles')
Step 3 . Insertion or (Show in UI)

To make the element visible must attach it to a parent element already present in the DOM.The are Several Ways to do this.
1 . appendChild() used this method adds the new element last the child of parent.
2 . prepend() used this method adds the new element first of parent .
3 . before() or after() inserts hte element specifically before or after a target element



3. What is Event Bubbling? And how does it work?

When you click an element, the click event first triggers on that specific element, then it moves up to its parent, then the grandparent, and so on, until it reaches the top of the document.

4. What is Event Delegation in JavaScript? Why is it useful?

It is useful because it saves memory and allows you to handle events for elements that are added to the page dynamically after the initial load.


5. What is the difference between preventDefault() and stopPropagation() methods?
The preventDefault() and stopPropagation() methods are both very important when handling events in JavaScript, but they have completely different functions.

1 . preventDefault()

This method is used to disable the default behavior of an element.
2 . stopPropagation()

This method stops the bubbling or upward propagation of the event.