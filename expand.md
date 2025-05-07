Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)
A: It is important to put thought into your IDs so that it is simple to have an event listener and keep track of the interactions of user on the interface so to use it respectively to the context to respond quickly back to the user's clicks on the interface.

What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?
A: Data attributes are like some type, value and other details that go along with an element as additional information. If you used same tag elements, you can specifically target a specific element through the help of attributes like type="email" or something. zthid is stored on html elements and can help keep some info, but microdatacan be helpful to browser and search engines.

What is a DOM fragment? Why are they powerful?
A: DOM fragment is temporary workspace that gets connected to real DOM to display after whole thing is completed so off screen workspace. They are powerful because they are fast and smooth. 

What is the point of a “Virtual DOM”? What do you gain? What do you lose?
A: Virtual DOM is a JS version of the real DOM used by for example React. Debugging can be harder but chunk-based changes through comparison helps eliminate constant reactions in relation of something being clicked or inputted so it is efficient by not re-rendering the whole component but just parts of it as diff by changes in the file, I believe.

In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?
A: That is because class is reserved to declare class for a given element.

What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?
A: The difference between Event Listeners and onClick is some within html head's script elements or inline for certain elements only and can be a little less flexible while event listener is more flexible and keeps it more organized for a software to be maintained more robustly.