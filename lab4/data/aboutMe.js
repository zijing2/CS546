const aboutMe = {
    education: ["GuangZhou DongFengXi Primary School", 
                "GuangZhou No.2 Middle School",
                "GuangDong University Of Technology",
                "Stevens Institute of Technology"
                ],
    highschool: "GuangZhou No.2 Middle School" ,
    undergrad: {name: "GuangDong University Of Technology",
                degree: "Bachelor Degree"},
    hobbies:["basketball","travelling","walkingDog"],
    hobbiesDetail:{
        basketball: "make new friends and stay in shape.",
        trvelling: "I like to take photos",
        walkingDog: "well, you knew it!"
    },
    classList:["CS519","CS546","CS561"],
    classesDetail:{
        CS519:{name:"Introduction to E-Commerce ",professor:"Prof.Gene Super",description:"Explain technologies supporting e-commerce, including Web services and electronic payment systems. (BS -IS J processes , )"},
        CS546:{name:"Web Programming ",professor:"Prof.Phil Barresi",description:"In this course, we will be learning the fundamentals of web development."},
        CS561:{name:"Database Management Systems I",professor:"Prof.Samuel Kim",description:"Students will become acquainted with the fundamental concepts of database management systems during class.  Presentations will emphasize relational databases in both theory and practice.  If time permits, additional topics such as Data Warehousing and Data Mining will also be covered."},
    }
}

let exportedMethods = {
    getEdu() {
        return aboutMe.education;
    },
    getHighschool(){
        return aboutMe.highschool;
    },
    getUndergrad(){
        return aboutMe.undergrad;
    },
    getHobbies(){
        return aboutMe.hobbies;
    },
    getHobbiesDetail(hobbies){
        return aboutMe.hobbiesDetail[hobbies];
    },
    getClasses(){
        return aboutMe.classList;
    },
    getClassesDetail(className){
        return aboutMe.classesDetail[className];
    }
       
}

module.exports = exportedMethods;