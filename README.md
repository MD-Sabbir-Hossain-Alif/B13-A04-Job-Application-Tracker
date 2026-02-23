# Job Application Tracker

A simple web app to track your job applications using **HTML, CSS (Tailwind + DaisyUI), and JavaScript(Vanilla)**.

---

## Features

- Track total applications, interviews, and rejections
- Interactive job list with status indicators

---

## Questions

---

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    ```Answer:
                1. getElementById
                we can get document element using getElementByID fast

                2. getElementsByClassName
                we can get all same class name list as a HTMLCollection (it's Live / Dynamic 'auto update DOM')

                3. querySelector / querySelectorAll
                we can get single or NodeList main thing is it can get css selector (it's Static 'don't auto update DOM)

    ```

2. How do you create and insert a new element into the DOM?

    ```Answer:
                Step: 1 we need to get wher i want to create an element (Ex: getElementById(div))

                Step: 2 we can set what text or content it takes using (Ex: div.innerText = "Sabbir") also we can add classlist

                Step: 3 then we can simply show it using append() or appendChild()

    ```

3. What is Event Bubbling? And how does it work?

    ```Answer:
                Event Bubbling is a js concept that propagat DOM event. when we click any of element that it give us child element , than propagate upward to the parent.

    ```

4. What is Event Delegation in JavaScript? Why is it useful?

    ```Answer:
                Event Delegation is very importent concept in js because we can just add a single event listener on parent it's works for whole child element as will as. so it's save lot's of time and space we don't neet to add every single element event listenr. (Ex: event.target)

    ```

5. What is the difference between preventDefault() and stopPropagation() methods?

    ```Answer:
                1. preventDefault()
                preventDefault() is a concept that prevent default browser action (like form)

                2. stopPropagation() 
                it's stop capturing event to the DOM (up or down)

    ```