import {Component} from "@angular/core";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";
import {MD_CHECKBOX_DIRECTIVES} from "@angular2-material/checkbox";
import {MD_RADIO_DIRECTIVES, MdRadioDispatcher} from "@angular2-material/radio";
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
  providers: [MdRadioDispatcher, MdIconRegistry]
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

  title:string = 'Devoxx UK';
  currentTalk:string = "dotCon";
  talks:Object[] = [
    {title: "Dot Con", speakers: "James Veitch", image: "dotCon"},
    {
      title: "Planet Devoxx",
      speakers: "Mark Hazell, Stephan Janssen, Dan Hardiker, James McGivern",
      image: "planetDevoxx"
    },
    {title: "Embracing failure", speakers: "Mazz Mosley", image: "embracingFailure"},
    {title: "Where's my free lunch?", speakers: "Hadi Hariri", image: "freeLunch"},
    {
      title: "Kubernetes in production - blue-green deployment, auto scaling and deployment automation",
      speakers: "Paul Bakker", image: "kubernetesInProduction"
    },
    {
      title: "The Silver Bullet Syndrome", speakers: "Hadi Hariri", image: "theSilverBulletSyndrome", nerd: true
    },
    {
      title: "Building a unikernel Java Application",
      speakers: "Ray Tsang",
      image: "unikernel"
    }
    ,
    {
      title: "Creating a safe dev environment on a public Cloud with Docker, Jenkins, Rancher and OpenVPN",
      speakers: "Marc-Aurele Brothier", image: "rancher"
    }
    ,
    {
      title: "To EE or not to EE",
      speakers: "Antonio Goncalves, David Blevins, Heather VanCura, Ian Robinson, Mark Little, Martijn Verburg, Peter Pilgrim",
      image: "ee"
    }
    ,
    {
      title: "Building Cognitive Applications with Watson",
      speakers: "Jonathan Kaufman",
      image: "watson"
    }
    ,
    {
      title: "Busy Java Developer's Guide to Hacking in Java",
      speakers: "Ted Neward",
      image: "hackingInJava"
    }
    ,
    {
      title: "Knowledge is Power: Getting out of trouble by understanding Git",
      speakers: "Steve Smith",
      image: "git"
    }
    ,
    {
      title: "2020 Vision", speakers: "Dan Hardiker", image: "devoxx"
    }
    ,
    {
      title: "Skynet is being built, and it'll run on the JVM",
      speakers: "Roy van Rijn",
      image: "devoxx"
    }
    ,
    {
      title: "YoctoServices: The new, new, new reality", speakers: "Richard Warburton", image: "devoxx"
    }
    ,
    {
      title: "The next generation of coders: Code Club",
      speakers: "Jonathan Gallimore",
      image: "devoxx"
    }
    ,
    {
      title: "I Do Not Hate Apache Maven", speakers: "Andy Gumbrecht", image: "devoxx"
    }
    ,
    {
      title: "Thanks Managers!", speakers: "Arun Gupta", image: "devoxx"
    }
    ,
    {
      title: "Google Dataflow: The new open model for batch and streaming processing",
      speakers: "Ray Tsang, Felipe Hoffa", image: "dataFlow"
    }
    ,
    {
      title: "Future of Development Panel",
      speakers: "Arun Gupta, Daniel Bryant, Amy Nicholson, Christopher Batey, Dan Hardiker",
      image: "panel"
    }
    ,
    {
      title: "DevOps - Microservices, containers, platforms, tooling... Oh yeah, and people",
      speakers: "Daniel Bryant, Steve Poole", image: "andPeople"
    }
    ,
    {
      title: "Monoliths to Microservices: Transforming the architecture of Criminal Justice",
      speakers: "Stephen Strudwick", image: "microservices"
    }
    ,
    {
      title: "Scaling Engineering by Hacking Conway's Law", speakers: "Aviran Mordo", image: "conwaysLaw"
    }
    ,
    {
      title: "Dev versus Ops", speakers: "Dan Hardiker", image: "devVsOps"
    }
    ,
    {
      title: "The Java Council", speakers: "Martijn Verburg, Trisha Gee", image: "council"
    }
    ,
    {
      title: "Docker and Kubernetes Recipes for Java Developers",
      speakers: "Arun Gupta",
      image: "kubernetes"
    },
    {title: "Progressive apps in the Real World", speakers: "Dean Hume", image: "progressiveAppsInTheRealWorld"},
    {title: "The Art of Angular in 2016", speakers: "Matt Raible", image: "theArtOfAngular"},
    {
      title: "From object oriented to functional domain modeling",
      speakers: "Mario Fusco",
      image: "fromObjectOrientedToFunctional"
    },
    {title: "What the Cult of Expertise Costs", speakers: "Jessica Rose", image: "whatTheCultOfExpertiseCosts"},
    {title: "Maven - Taming the Beast", speakers: "Roberto Cortez", image: "mavenTamingTheBeast"},
    {
      title: "Offline-first apps with Web Components",
      speakers: "AMahdy AbdElAziz",
      image: "offlineFirstAppsWithWebComponents"
    },
    {
      title: "Microsoft and Open Source? Microsoft and Java? Really?",
      speakers: "Giles Davies",
      image: "microsoftAndOpenSource"
    },
    {
      title: "Harnessing Domain Driven Design for Distributed Systems",
      speakers: "Andrew Harmel-Law, Gayathri Thiyagarajan",
      image: "harnessingDomainDrivenDesign"
    },
    {
      title: "SQL for JSON: Querying with Performance for NoSQL Databases and Applications",
      speakers: "Arun Gupta",
      image: "sqlForJson"
    },
    {
      title: "10 Building Blocks for Enterprise JavaScript Applications",
      speakers: "Geertjan Wielenga",
      image: "10buildingBlocks"
    },
    {title: "MVC 1.0 - by Example", speakers: "Ivar Grimstad", image: "mvcByExample"}
  ];
}
