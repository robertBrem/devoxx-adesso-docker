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
  public openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  public closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  title:string = 'Devoxx UK';
  talks:Object[] = [
    {title: "Dot Con", speakers: "James Veitch", image: "dotCon.png"},
    {
      title: "Planet Devoxx",
      speakers: "Mark Hazell, Stephan Janssen, Dan Hardiker, James McGivern",
      image: "planetDevoxx.png"
    },
    {title: "Embracing failure", speakers: "Mazz Mosley", image: "embracingFailure.png"},
    {title: "Where's my free lunch?", speakers: "Hadi Hariri", image: "wheresMyFreeLunch.png"},
    {
      title: "Kubernetes in production - blue-green deployment, auto scaling and deployment automation",
      speakers: "Paul Bakker", image: "kubernetesInProduction.png"
    },
    {
      title: "The Silver Bullet Syndrome", speakers: "Hadi Hariri", image: "theSilverBulletSyndrome.png", nerd: true
    },
    {
      title: "Building a unikernel Java Application",
      speakers: "Ray Tsang",
      image: "buildingAUnikernelJavaApplication.png"
    }
    ,
    {
      title: "Creating a safe dev environment on a public Cloud with Docker, Jenkins, Rancher and OpenVPN",
      speakers: "Marc-Aurele Brothier", image: "creatingASaveDevEnvironmet.png"
    }
    ,
    {
      title: "To EE or not to EE",
      speakers: "Antonio Goncalves, David Blevins, Heather VanCura, Ian Robinson, Mark Little, Martijn Verburg, Peter Pilgrim",
      image: "toEEorNotToEE.png"
    }
    ,
    {
      title: "Building Cognitive Applications with Watson",
      speakers: "Jonathan Kaufman",
      image: "BuildingCognitiveApplicationsWithWatson.png"
    }
    ,
    {
      title: "Busy Java Developer's Guide to Hacking in Java",
      speakers: "Ted Neward",
      image: "BusyJavaDevelopersBuideToHackingInJava.png"
    }
    ,
    {
      title: "Knowledge is Power: Getting out of trouble by understanding Git",
      speakers: "Steve Smith",
      image: "knowledgeIsPower.png"
    }
    ,
    {
      title: "2020 Vision", speakers: "Dan Hardiker", image: "2020Vision.png"
    }
    ,
    {
      title: "Skynet is being built, and it'll run on the JVM",
      speakers: "Roy van Rijn",
      image: "skynetIsBeingBuilt.png"
    }
    ,
    {
      title: "YoctoServices: The new, new, new reality", speakers: "Richard Warburton", image: "yoctoServices.png"
    }
    ,
    {
      title: "The next generation of coders: Code Club",
      speakers: "Jonathan Gallimore",
      image: "theNextGenerationOfCoders.png"
    }
    ,
    {
      title: "I Do Not Hate Apache Maven", speakers: "Andy Gumbrecht", image: "iDoNotHateApacheMaven.png"
    }
    ,
    {
      title: "Thanks Managers!", speakers: "Arun Gupta", image: "thanksManagers.png"
    }
    ,
    {
      title: "Google Dataflow: The new open model for batch and streaming processing",
      speakers: "Ray Tsang, Felipe Hoffa", image: "googleDataflow.png"
    }
    ,
    {
      title: "Future of Development Panel",
      speakers: "Arun Gupta, Daniel Bryant, Amy Nicholson, Christopher Batey, Dan Hardiker",
      image: "futureOfDevelopmentPanel.png"
    }
    ,
    {
      title: "DevOps - Microservices, containers, platforms, tooling... Oh yeah, and people",
      speakers: "Daniel Bryant, Steve Poole", image: "devOps.png"
    }
    ,
    {
      title: "Monoliths to Microservices: Transforming the architecture of Criminal Justice",
      speakers: "Stephen Strudwick", image: "monolithsToMicroservices.png"
    }
    ,
    {
      title: "Scaling Engineering by Hacking Conway's Law", speakers: "Aviran Mordo", image: "scalingEngineering.png"
    }
    ,
    {
      title: "Dev versus Ops", speakers: "Dan Hardiker", image: "devVersusOps.png"
    }
    ,
    {
      title: "The Java Council", speakers: "Martijn Verburg, Trisha Gee", image: "theJavaCouncil.png"
    }
    ,
    {
      title: "Docker and Kubernetes Recipes for Java Developers",
      speakers: "Arun Gupta",
      image: "dockerAndKubernetes Recipes.png"
    }
  ]
    ;
}
