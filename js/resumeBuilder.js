﻿var bio = {
    "name": "Hongbin Chen",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "646-379-6838",
        "email": "hongbinchb@gmail.com",
        "github": "hongbinc",
        "location": "Brooklyn, NY"
    },
    "welcomeMessage": " ",
    "skills": [
        "HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap", "Knockout.js"
    ],
    "biopic": "images/me.jpg"
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName)
        .prepend(formattedRole)
        .prepend(formattedPic)
        .append(formattedWelMessage)
        .append(HTMLskillsStart);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    $("#topContacts, #footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    if (bio.skills.length > 0) {
        for (var skills in bio.skills) {
            var formattedSkilled = HTMLskills.replace("%data%", bio.skills[skills]);
            $("#skills").append(formattedSkilled);

        }
    }
};

var education = {
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/"
    }],

    "schools": [{
        "name": "University at Buffalo",
        "location": "New York",
        "degree": "B.S.",
        "majors": ["Computer Science"],
        "dates": "Graduated May 2015",
        "url": "http://www.buffalo.edu/"
    }, {
        "name": "College of Staten Island",
        "location": "New York",
        "degree": "B.S.",
        "majors": ["Business Administration"],
        "dates": "August 2011- December 2011",
        "url": "http://www.csi.cuny.edu/"
    }]
};

education.display = function () {
    if (education.schools.length > 0) {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name)
                                                .replace("#", education.schools[school].url);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            
            $(".education-entry:last").append(formattedSchool)
                .append(formattedSchoolDates)
                .append(formattedSchoolMajor)
                .append(formattedSchoolLocation)
                .append(formattedSchoolDegree);
        }
    }

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].school)
                                              .replace("#", education.onlineCourses[0].url);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].title);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].date);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);

    $(".education-entry:last").append(HTMLonlineClasses)
        .append(formattedOnlineTitle)
        .append(formattedOnlineDates)
        .append(formattedOnlineSchool);
};
var work = {
    "jobs": [{
        "employer": "KW the Amar Team",
        "title": "Front-End Web Developer",
        "dates": "Oct 2015 - Feb 2016",
        "description": 
            "Coded and implemented Two WordPress sites from Photoshop layout through HTML/CSS to Realty theme, functions, and plugins. Implemented Memberful and Stripe plugins to create a membership payment system, Provided technical support and instruction to staff. Website troubleshooting and Maintenance.",
        
        "location": "New York, NY"
    }]
};

work.display = function () {
    if (work.jobs.length > 0) {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle)
                .append(formattedDates)
                .append(formattedWorkLocation)
                .append(formattedDescription);
        }
    }
};

var projects = {
    projects: [{
        "title" : "Neighborhood Map",
        "dates" : "Mar 2016",
        "description": "<ur style='list-style-type:disc'><li>Developed single page application featuring a map of neighborhood with Knockout.JS using MVVM architecture.</li><li>Implemented third party APIs (Google Map and Foursquare), allowed users define a neighborhood and search by keywords to displayed 30 popular places on the map with map markers.</li><li>Built a search bar to filter the places displayed on map.</li></ur>",
        "images": [""],
        "url": "http://hongbinc.github.io/Frontend-NeighborhoodMap/"
           
    }, 
    {
        "title": "Arcade Game Clone",
        "dates": "Feb 2016",
        "description": "<ur><li>Clone of the classic game, Frogger. Udacity provided the art assets and game engine.</li><li>Coded player, enemies, and other game entities in JavaScript's object-oriented pseudo-classical style.</li></ur>",
        "images": [""],
        "url": "http://hongbinc.github.io/Frontend-ArcadeGame/"
    },
    {
        "title": "Website Optimization",
        "dates": "03/2016",
        "description": "<ur><li>Optimized critical rendering path of existing website to achieve PageSpeed Insights score above 90.</li><li>Eliminated inefficiencies in the website's scroll animation. Site now scrolls at 60 frames per second.</li><li>Reduced the scripting time, layout time and painting time by optimizing JavaScript code and CSS style.</li></ur>",
        "images": [""],
        "url": "https://github.com/hongbinc/Frontend-WebsiteOptimization"
    }],
};

projects.display = function () {

    for (var proj in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title)
                                                    .replace("#", projects.projects[proj].url);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);

        $(".project-entry:last").append(formattedProjectTitle)
        .append(formattedProjectDate)
        .append(formattedProjectDescription);

        if (projects.projects[proj].images.length > 0) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[proj].images);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }


};

work.display();
bio.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);