//resume information
var bio = {
  "name": "Nepeta Leijon",
  "role": "Huntress",
  "contacts":
  {
    "mobile": "413-333-3833",
    "email": "arseniccatnip@resumebuilder.com",
    "github": "nonexistent",
    "twitter": "nah",
    "location": "San Francisco",
    "pesterchum": "arsenicCatnip"
  },
  "welcomeMessage": "lorem ipsum dolor sit amet",
  "skills": [
        "hunting", "drawing", "writing", "sewing"
    ],
  "biopic": "images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "Cave School",
      "location": "Fort Lauderdale, FL",
      "degree": "Graduate",
      "majors": [
                "Hunting", "Fishing"
            ],
      "dates": "2013",
      "url": "http://example.com"
        },
    {
      "name": "Dave School",
      "location": "Saint Petersburg, FL",
      "degree": "Masters",
      "majors": [
            "Hunting 2", "AST 1 (Advanced Survival Technique)"
            ],
      "dates": "2014",
      "url": "http://example.com"
        }
    ],
  "onlineCourses": [
    {
      "title": "Coolcats Study",
      "school": "Feline Fallacy University",
      "dates": "2011",
      "url": "http://www.notaheckingsite.com"
        }
    ]
};

var work = {
  "jobs": [
    //Equius Job
    {
      "employer": "Zahhak, Equius",
      "title": "Moirail",
      "dates": "2010 - Future",
      "location": "Mammoth Cave Hotel",
      "description": "Moirallegiance is a process that occurs between a troll " +
      "and their moirail (also informally known as a palemate). It is a form of " +
      "guardianship, but it isn't simply about being platonic soul bros forever. " +
      "They are a protector of their moirail's heart. They keep each other grounded."
        },
    //Huntress
    {
      "employer": "Self",
      "title": "Hunter",
      "dates": "Hatch - Death",
      "location": "Mammoth Cave National Park",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut " +
      "enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  "+
      "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
      "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur " +
      "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
      "mollit anim id est laborum."
        }
    ]
};

var projects = {
  "projects": [
    //Art1
    {
      "title": "Drawing 1",
      "dates": "2010",
      "description": "But I must explain to you how all this mistaken idea of " +
      "denouncing pleasure and praising pain was born and I will give you a " +
      "complete account of the system, and expound the actual teachings of the " +
      "great explorer of the truth, the master-builder of human happiness. No one " +
      "rejects, dislikes, or avoids pleasure itself, because it is pleasure, " +
      "but because those who do not know how to pursue pleasure rationally encounter " +
      "consequences that are extremely painful. Nor again is there anyone who loves " +
      "or pursues or desires to obtain pain of itself, because it is pain, but because " +
      "occasionally circumstances occur in which toil and pain can procure him " +
      "some great pleasure. To take a trivial example, which of us ever undertakes" +
      "laborious physical exercise, except to obtain some advantage from it? " +
      "But who has any right to find fault with a man who chooses to enjoy a " +
      "pleasure that has no annoying consequences, or one who avoids a pain " +
      "that produces no resultant pleasure?",
      "images": [
                "images/197x148.gif",
                "images/fry.jpg"
            ]
        },

    {
      "title": "Drawing 2",
      "dates": "2011",
      "description": "this is why we have lorem ipsum",
      "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        }
    ]
};

//display functions

bio.display = function()
{
  //header
  var formattedRole = HTMLheaderRole.replace("%data%", this.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", this.name);
  $("#header").prepend(formattedName);

  //contacts
  var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
  var formattedPesterchum = HTMLpesterchum.replace("%data%", this.contacts.pesterchum);;
  var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
  var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
  $("#topContacts, #footerContacts").append
  (formattedMobile, formattedPesterchum,formattedEmail, formattedLocation);

  //description
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);
  var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
  $("#header").append(formattedBioPic);
  if (this.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    this.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill)
        $("#skills").append(formattedSkill);
    });
  }

};
bio.display();

work.display = function()
{
  this.jobs.forEach(function(job)
  {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDate = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append
    (formattedEmployerTitle, formattedLocation, formattedDate, formattedDescription);
  });
};
work.display();

projects.display = function()
{
  projects.projects.forEach(function(project)
  {
    $("#projects").append(HTMLprojectStart);
    $("#projects").append(HTMLprojectAppend);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedProjectDesc = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append
    (formattedProjectTitle,formattedProjectDates,formattedProjectDesc);

    project.images.forEach(function(image)
    {
      var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
      $(".project-append:last").append(formattedProjectImage);
    });
  });
};
projects.display();

education.display = function()
{
  this.schools.forEach(function(school)
  {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedDate = HTMLschoolDates.replace("%data%", school.dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedSchoolLink = formattedName.replace("#", school.url);
    var formattedEducation = formattedSchoolLink + formattedDegree;
    $(".education-entry:last").append
    (formattedEducation, formattedDate, formattedLocation);
    school.majors.forEach(function(major)
    {
      var formattedMajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(formattedMajor);
    });
  });
  $("#education").append(HTMLonlineClasses);
  this.onlineCourses.forEach(function(course)
  {
    $("#education").append(HTMLschoolStart);
    var formattedClass = HTMLonlineTitle.replace("%data%", course.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedLink = formattedClass.replace("#", course.url);
    var formattedCourse = formattedLink + formattedSchool;
    var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedURL = HTMLonlineURL.replace("%data%", course.url);
    $(".education-entry:last").append(formattedCourse, formattedDates, formattedURL);
  });
};
education.display();



// location stuff

function locationizer(work_obj)
{
  var locationArray = [];
  work_obj.jobs.forEach(function(job)
  {
    var newLocation = (job.location);
    locationArray.push(newLocation);
  });
  return locationArray;
}

console.log(locationizer(work));

$(document).click(function(loc)
{
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});



$("#mapDiv").append(googleMap);
