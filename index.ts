const appDiv: HTMLElement = document.getElementById('app');

const source = [
    {
        "guid": "j5Dc9Z",            
        "courses": [
            {
                "id": 1,
                "name": "foo",                    
            }
        ]
    },
    {
        "guid": "a5gdfS",
        "courses": [
            {
                "id": 2,
                "name": "bar",                    
            },
            {
                "id": 3,
                "name": "foo",                    
            },    
        ]
     },
     {
        "guid": "jHab6i",
        "courses": [
            {
                "id": 4,
                "name": "foobar",                    
            }   
        ]
     },  
];

let filteredArray = source.filter((element) => element.courses.find((subElement) => subElement.id == 3));

const selectedGuid = filteredArray[0].guid; 
console.log(selectedGuid);  
 
const courses = filteredArray.map(x=>x.courses)[0].filter(c=>c.id === 3)[0]; 
console.log(courses);  

appDiv.innerHTML = JSON.stringify(courses, undefined, 2);
