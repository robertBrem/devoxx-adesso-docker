import {Component} from "@angular/core";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";
import {MD_CHECKBOX_DIRECTIVES} from "@angular2-material/checkbox";
import {MD_RADIO_DIRECTIVES} from "@angular2-material/radio";
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from "@angular2-material/progress-circle";
import {MD_PROGRESS_BAR_DIRECTIVES} from "@angular2-material/progress-bar";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {MD_ICON_DIRECTIVES, MdIconRegistry} from "@angular2-material/icon";
import {MD_TABS_DIRECTIVES} from "@angular2-material/tabs";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button";

@Component({
  moduleId: module.id,
  selector: 'devoxx-adesso-app',
  templateUrl: 'devoxx-adesso.component.html',
  styleUrls: ['devoxx-adesso.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_CHECKBOX_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_PROGRESS_BAR_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_TABS_DIRECTIVES
  ],
  providers: [MdIconRegistry]
})
export class DevoxxAdessoAppComponent {
  /* Open when someone clicks on the span element */
  public openNav(currentTalk:string) {
    document.getElementById("myNav").style.width = "100%";
    this.currentTalk = currentTalk;
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  public closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  public openUrl(url:string) {
    window.open(url,'_blank');
  }

  title:string = 'Devoxx UK';
  currentTalk:string = "dotCon";
  talks:Object[] = [
    {
      title: "Dot Con",
      speakers: "James Veitch",
      image: "dotCon"
    },
    {
      title: "Planet Devoxx",
      speakers: "Mark Hazell, Stephan Janssen, Dan Hardiker, James McGivern",
      image: "planetDevoxx",
      video: "https://www.youtube.com/watch?v=EibLZe-wZG8"
    },
    {
      title: "Embracing failure",
      speakers: "Mazz Mosley",
      image: "embracingFailure",
      video: "https://www.youtube.com/watch?v=hf6PVE2yFgA",
      business: true
    },
    {
      title: "Where's my free lunch?",
      speakers: "Hadi Hariri",
      image: "freeLunch",
      video: "https://www.youtube.com/watch?v=_58mNj3Chzo"
    },
    {
      title: "Kubernetes in production - blue-green deployment, auto scaling and deployment automation",
      speakers: "Paul Bakker",
      image: "kubernetesInProduction",
      video: "https://www.youtube.com/watch?v=-Ci4vd4rh4M"
    },
    {
      title: "The Silver Bullet Syndrome",
      speakers: "Hadi Hariri",
      image: "theSilverBulletSyndrome",
      video: "https://www.youtube.com/watch?v=_xjpO3y_Np4",
      fav: true
    },
    {
      title: "Building a unikernel Java Application",
      speakers: "Ray Tsang",
      image: "unikernel",
      video: "https://www.youtube.com/watch?v=FcMoCXC3xdo"
    }
    ,
    {
      title: "Creating a safe dev environment on a public Cloud with Docker, Jenkins, Rancher and OpenVPN",
      speakers: "Marc-Aurele Brothier",
      image: "rancher",
      video: "https://www.youtube.com/watch?v=ZMPuhQPQmqs"
    }
    ,
    {
      title: "To EE or not to EE",
      speakers: "Antonio Goncalves, David Blevins, Heather VanCura, Ian Robinson, Mark Little, Martijn Verburg, Peter Pilgrim",
      image: "ee",
      video: "https://www.youtube.com/watch?v=vdRu2spgS3s"
    }
    ,
    {
      title: "Building Cognitive Applications with Watson",
      speakers: "Jonathan Kaufman",
      image: "watson",
      video: "https://www.youtube.com/watch?v=PwG8aTjOo94"
    }
    ,
    {
      title: "Busy Java Developer's Guide to Hacking in Java",
      speakers: "Ted Neward",
      image: "hackingInJava",
      video: "https://www.youtube.com/watch?v=eJVvVCh0u3c"
    }
    ,
    {
      title: "Knowledge is Power: Getting out of trouble by understanding Git",
      speakers: "Steve Smith",
      image: "git",
      video: "https://www.youtube.com/watch?v=5V-6lI3Qz6w"
    }
    ,
    {
      title: "2020 Vision",
      speakers: "Dan Hardiker",
      image: "devoxx"
    }
    ,
    {
      title: "Skynet is being built, and it'll run on the JVM",
      speakers: "Roy van Rijn",
      image: "devoxx"
    }
    ,
    {
      title: "YoctoServices: The new, new, new reality",
      speakers: "Richard Warburton",
      image: "devoxx"
    }
    ,
    {
      title: "The next generation of coders: Code Club",
      speakers: "Jonathan Gallimore",
      image: "devoxx"
    }
    ,
    {
      title: "I Do Not Hate Apache Maven",
      speakers: "Andy Gumbrecht",
      image: "devoxx"
    }
    ,
    {
      title: "Thanks Managers!",
      speakers: "Arun Gupta",
      image: "devoxx"
    }
    ,
    {
      title: "Google Dataflow: The new open model for batch and streaming processing",
      speakers: "Ray Tsang, Felipe Hoffa",
      image: "dataFlow",
      video: "https://www.youtube.com/watch?v=o-ZLsmav_hw"
    }
    ,
    {
      title: "Future of Development Panel",
      speakers: "Arun Gupta, Daniel Bryant, Amy Nicholson, Christopher Batey, Dan Hardiker",
      image: "panel",
      video: "https://www.youtube.com/watch?v=pcWNlu7NMKU"
    }
    ,
    {
      title: "DevOps - Microservices, containers, platforms, tooling... Oh yeah, and people",
      speakers: "Daniel Bryant, Steve Poole",
      image: "andPeople",
      video: "https://www.youtube.com/watch?v=TrjeyRAEp48"
    }
    ,
    {
      title: "Monoliths to Microservices: Transforming the architecture of Criminal Justice",
      speakers: "Stephen Strudwick",
      image: "microservices",
      video: "https://www.youtube.com/watch?v=AYIYrYsF8dE"
    }
    ,
    {
      title: "Scaling Engineering by Hacking Conway's Law",
      speakers: "Aviran Mordo",
      image: "conwaysLaw",
      video: "https://www.youtube.com/watch?v=eG27-f79YX0",
      business: true
    }
    ,
    {
      title: "Dev versus Ops",
      speakers: "Dan Hardiker",
      image: "devVsOps",
      video: "https://www.youtube.com/watch?v=tIYPATalcGs"
    }
    ,
    {
      title: "The Java Council",
      speakers: "Martijn Verburg, Trisha Gee",
      image: "council",
      video: "https://www.youtube.com/watch?v=NP-qwkVuwIs"
    }
    ,
    {
      title: "Docker and Kubernetes Recipes for Java Developers",
      speakers: "Arun Gupta",
      image: "kubernetes",
      video: "https://www.youtube.com/watch?v=a6lZWaqKSmY",
      nerd: true
    },
    {
      title: "Progressive apps in the Real World",
      speakers: "Dean Hume",
      image: "progressiveAppsInTheRealWorld",
      video: "https://www.youtube.com/watch?v=uo85G7T5Gx8"
    },
    {
      title: "The Art of Angular in 2016",
      speakers: "Matt Raible",
      image: "theArtOfAngular",
      video: "https://www.youtube.com/watch?v=T4zsanOnKtk"
    },
    {
      title: "From object oriented to functional domain modeling",
      speakers: "Mario Fusco",
      image: "fromObjectOrientedToFunctional",
      video: "https://www.youtube.com/watch?v=SN_hqTn4N6Y"
    },
    {
      title: "What the Cult of Expertise Costs",
      speakers: "Jessica Rose",
      image: "whatTheCultOfExpertiseCosts",
      video: "https://www.youtube.com/watch?v=N3kBUy2JtTA"
    },
    {
      title: "Maven - Taming the Beast",
      speakers: "Roberto Cortez",
      image: "mavenTamingTheBeast",
      video: "https://www.youtube.com/watch?v=r_50TkgV90c"
    },
    {
      title: "Offline-first apps with Web Components",
      speakers: "AMahdy AbdElAziz",
      image: "offlineFirstAppsWithWebComponents",
      video: "https://www.youtube.com/watch?v=eW3edu03328"
    },
    {
      title: "Microsoft and Open Source? Microsoft and Java? Really?",
      speakers: "Giles Davies",
      image: "microsoftAndOpenSource",
      video: "https://www.youtube.com/watch?v=urF0CHOLQDk"
    },
    {
      title: "Harnessing Domain Driven Design for Distributed Systems",
      speakers: "Andrew Harmel-Law, Gayathri Thiyagarajan",
      image: "harnessingDomainDrivenDesign",
      video: "https://www.youtube.com/watch?v=j5tFNT55kmM"
    },
    {
      title: "SQL for JSON: Querying with Performance for NoSQL Databases and Applications",
      speakers: "Arun Gupta",
      image: "sqlForJson",
      video: "https://www.youtube.com/watch?v=1ge5Iz9ndTc"
    },
    {
      title: "10 Building Blocks for Enterprise JavaScript Applications",
      speakers: "Geertjan Wielenga",
      image: "10buildingBlocks",
      video: "https://www.youtube.com/watch?v=vY3OLDzrmM0"
    },
    {
      title: "MVC 1.0 - by Example",
      speakers: "Ivar Grimstad",
      image: "mvcByExample",
      video: "https://www.youtube.com/watch?v=-cmmvd2FVWE"
    }
  ];
}
