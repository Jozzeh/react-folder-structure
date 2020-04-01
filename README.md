# React folder structure  

This is an empty project that is actually an example folder structure for a React and/or React native project.  
There are only example files added to the folders and some explanation as to what each folder contains.  

Starting a new react project, I like to use the 'npx create-react-app' command, as it is a pretty good place to start from.  
('npx react-native init' to start a react native project.)

!!!!!  
Every example in this repository needs to be seen as a separate entity.   
They do not work together. Change according to the requirements of the project.   
!!!!!   

## Component folder structure  
From big to small:  
Pages -> Blocks -> Elements  

Atomic design is great and can be used. However I found it sometimes raises questions whether something is a molecule or an organism. The type of discussions it tries to avoid... 

So proposed here is a structure/pattern that is based upon the 'BEM' css methodology.  
Wait - what?   
The BEM methodology has 3 layers... Block - Element - Modifier.   
The component structure also has 3 layers... Page - Block - Element.  
PBE pattern doesn't sound as snappy as Atomic or BEM but I think it is quite easy to understand.  

Element : An element is the smallest component. The components are to be reused as much as possible and events should be fired by passed on to the parent element.  
Example: Button, List, input element, ...   
 
Block : A Block is a set of elements. These blocks can be reused and if they are, the events should be passed on to the parent element. Otherwise, events can be handled here.  
Example: A form with some inputs

Page : The biggest component is a single page. It is a set of blocks.  

------  

If a component library is used... Then the Page, Block & Element pattern could become a page-block pattern (because the element side is covered by the component library).  

## React & RN NPM Packages  
- redux 
- redux-thunk
- redux-form
- redux-persist
- redux-logger
- immer
- react-router
- react-intl


## React Native packages  
- react-native-sensitive-info
- react-native-community/datetimepicker
- react-native-community/async-storage (in conjunction with redux persist)
- react-native-localize
- react-native-gesture-handler
- react-native-device-info
- react-native-collapsible
- react-native-splash-screen


## Redux  
Redux is a wonderfull state management tool. Even though React hooks can get you a long way (looking at useContext), redux has a nice seperation of code in my opinion and comes with some easy to use logging.   

### Redux thunk  
https://github.com/reduxjs/redux-thunk 

### Redux form  
https://redux-form.com/  
(depending on how easy/hard the forms are)   

### Redux persist
https://github.com/rt2zz/redux-persist 
(Depending on if state should be persisted.)

### Redux logger
https://github.com/LogRocket/redux-logger 

## Immer
https://immerjs.github.io/immer/docs/introduction  
Immer makes immutable state changes less bloaded and performant.  
The documentation is excellent and honest in what it does well and what the pitfalls are.  

## Other packages  
React router and React intl are more "React only". 
Where as previous packages are React & React Native compatible...  

## Testing
Unit testing in React & React Native is commonly done with jest.  
In the __tests__ folder, the structure of the src folder is largely copied. It makes finding a unit test for a component very easy.  
Depending on the need for more types of testing, other libraries can be added... Some working together with Jest.  

## Mocking  
Depending on the need to have a mock server... a mock server can be added in the __mocks__ folder. A mock server can be some json files, served by a simple NodeJS server.