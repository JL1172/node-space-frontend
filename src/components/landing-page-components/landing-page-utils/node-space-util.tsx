import { NodeSpaceDescriptionType } from "../../../global-dto/g-dtos";
import icon3 from "../../../global-imgs/icon3.png";
import icon4 from "../../../global-imgs/icon4.png";
import icon5 from "../../../global-imgs/icon5.png"; 

export const description_modules: NodeSpaceDescriptionType[] = [
    {
      media: icon4,
      heading: "Interested In Learning More About Node.js?",
      description: (
        <>
          Once a week, a module will be picked from Node's built in modules and a
          follow along tutorial (with code) will be posted. This tutorial will go
          into depth with the practical application and implementation of the
          module and real world examples we have seen node utilized in or ways we
          have utilized node.
        </>
      ),
      p1: undefined,
      p2: undefined,
      p3: undefined,
    },
    {
      media: icon3,
      heading: "The Problem Node-Space Solves?",
      description: undefined,
      p1: (
        <>
          <span className="spn">[Node-space]</span> addresses a prevalent issue in
          the developer community— the overshadowing of Node.js by its own
          frameworks and libraries. Many developers, like myself, initially
          gravitate towards frameworks like Express, inadvertently neglecting the
          intrinsic power residing within vanilla Node. The built-in modules,
          often go unnoticed and overlooked, contributing to Node being underrated
          and overlooked.
        </>
      ),
      p2: (
        <>
          In my journey, I encountered a sentiment shared by a fellow developer
          that Node doesn't receive the attention it truly deserves. This
          perception is not a critique of frameworks or libraries; rather, it
          underscores the untapped potential within Node itself. Delving into
          Node's built-in modules was a transformative experience for me,
          unraveling its intricate workings and shedding light on its hidden
          capabilities.
        </>
      ),
      p3: (
        <>
          As I explored modules like <span className="spn">[Crypto]</span> and{" "}
          <span className="spn">[Child Process]</span>, my understanding of Node
          deepened, making me a more proficient developer. Node-space aims to
          bridge the gap, unveiling the compelling features of Node's modules and
          instilling the excitement that comes with mastering this powerful
          runtime. Through sharing these insights, I hope to inspire a renewed
          appreciation for Node.js, fostering a community where its fundamental
          strengths are celebrated and leveraged to their fullest extent.
        </>
      ),
    },
    {
      media: icon5,
      heading: "View The Node Tutorials",
      description: (
        <>
          You can view all Nodejs Tutorials. View either the latest one or
          something in the past.
        </>
      ),
      p1: undefined,
      p2: undefined,
      p3: undefined,
    },
  ];