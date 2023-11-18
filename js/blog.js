const displayNav = (category_id=1000) =>{
    const headerSection =document.getElementById('header-section');
    headerSection.innerHTML='';
    
    headerSection.innerHTML = 
    `
    <div class="flex flex-col md:flex-row justify-center md:justify-between ">
            <img class="max-w-[170px] mx-auto md:mx-0 max-h-10"  src="./images/Logo.png" alt="logo">
           
            <a href="index.html" class="btn mt-4 md:mt-0 mx-auto md:mx-0 text-lg font-medium bg-[#215a77] text-white">Back To Home</a>
        </div>
    `
   
}

const displayBlog = ()=>{
    const mainSection = document.getElementById('main-section');
    mainSection.innerHTML=
    `
    <div class="mt-10" >
                <h1 class="text-3xl font-bold mb-4">Scope of var, let, and const</h1>
                <p class="text-xl font-normal text-justify">
                    In JavaScript, var, let, and const are used to declare variables, but they have different scopes and behaviors.<br> <br>
                    <span class="my-2 text-2xl font-bold">var</span>
                    <ul >
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>Variables declared with var are function-scoped. This means that they are only accessible within the function in which they are defined.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>If a variable is declared using var outside any function, it becomes a global variable and is accessible throughout the entire program.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>'var' variables are hoisted to the top of their scope during the compilation phase, which means they can be used before they are declared, but their values will be undefined until the declaration is reached in the code.</li>
                    </ul>

                    <span class="my-2 text-2xl font-bold">let</span>
                    <ul >
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>Variables declared with let are block-scoped. They are only accessible within the block (e.g., inside loops or if statements) in which they are defined.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>Unlike var, let variables are not hoisted to the top of their block, and they cannot be accessed before the point of declaration.</li>
                       
                    </ul>
                    <span class="my-2 text-2xl font-bold">const</span>
                    <ul >
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>Variables declared with const are also block-scoped like let.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>The key difference is that once a value is assigned to a const variable, it cannot be reassigned. It remains constant throughout its scope.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>const does not mean the value is immutable; it means the variable identifier cannot be reassigned. If a const variable holds an object or an array, the properties or elements of that object or array can still be modified.</li>
                       
                    </ul>

                </p>
            </div>
            <div class="mt-10" >
                <h1 class="text-3xl font-bold mb-4 "> The use cases of null and undefined</h1>
                <p class="text-xl font-normal  text-justify">
                    In JavaScript, null and undefined are two distinct values with different use cases.<br><br>
                    <span class="mx-2 text-2xl font-bold">undefined</span>
                    <ul >
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>undefined is a primitive value that is automatically assigned to variables that have been declared but not yet assigned a value.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>It is also the default return value of a function that does not explicitly return anything.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>undefined is often used to check whether a variable has been assigned a value or not.</li>
                    </ul>

                    <span class="mx-2 text-2xl font-bold">null</span>
                    <ul >
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>null is also a primitive value, but it is explicitly assigned to a variable to indicate the absence of any object value.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>It can be used to intentionally represent the absence of a value, typically as a placeholder for an object that does not exist or is not yet initialized.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>It is often used in situations where an object is expected but not available.</li>
                       
                    </ul><br>
                    <span class="my-2 text-2xl font-bold">Use Cases:</span><br><br>
                    <span class="my-1 mt-2 text-xl font-bold">undefined</span>
                    <ul >
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>Variable initialization: When you declare a variable but do not assign a value to it initially.</li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>Function returns: When a function does not explicitly return a value.
                         </li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>   Property access: When you try to access an object property that does not exist.</li>
                       
                    </ul>
                    <span class="mx-1 text-xl font-bold">null</span>
                    <ul >
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>Explicit absence of an object: To indicate that a variable is intentionally empty or does not reference any object.
                           
                           
                            </li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span> Initialization for later assignment: As a placeholder that will be assigned an object later.
                         </li>
                        <li class=" my-1 ml-5 text-xl" > <span class="text-2xl font-bold">-  </span>  Comparison: It can be used in comparisons to explicitly check for the absence of an object.
                            javascript</li>
                       
                    </ul>

                </p>
            </div>

            <div class="mt-10" >
                <h1 class="text-3xl font-bold mb-4">What is REST API?</h1>
                <p class="text-xl font-normal text-justify ">
                       
                    A REST API, short for Representational State Transfer Application Programming Interface, is a set of conventions and rules that govern the design and interaction of web services. It adheres to the principles of Representational State Transfer (REST), a widely adopted architectural style. At its core, a REST API treats everything as a resource, be it data or services, each uniquely identified by a URI (Uniform Resource Identifier). The API relies on standard HTTP methods, including GET for retrieval, POST for creation, PUT for updating, and DELETE for removal, to perform operations on these resources. <br> <br>

A fundamental principle of RESTful APIs is statelessness. This means that each client request to the server must contain all the necessary information for the server to understand and fulfill the request. Unlike other communication protocols, a RESTful API does not store any client state between requests. Additionally, resources within the API can have multiple representations, such as JSON or XML, with clients and servers negotiating the representation format for flexibility and compatibility. <br>

For example, consider a web service managing a collection of books. In this scenario, clients could use HTTP methods like GET to retrieve a list of all books, GET with a specific book ID to fetch details, POST to create a new book, PUT to update book details, and DELETE to remove a book. <br> <br>
The benefits of REST APIs include scalability due to their statelessness, interoperability facilitated by standard HTTP methods and data formats, and simplicity in design. Implementing a REST API involves defining resources, designing URIs, and specifying how clients interact with those resources using HTTP methods. Various frameworks, such as Express.js, Django REST framework, and Spring Boot, aid developers in building RESTful APIs, making them a popular choice for creating modern and distributed systems.

                </p>
            </div>
    `
}



displayNav();
displayBlog();