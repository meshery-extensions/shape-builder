
<p style="text-align:center;" align="center"><a href="https://meshery.io"><picture>
 <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/meshery/meshery/master/.github/assets/images/readme/meshery-logo-light-text-side.svg">
 <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/meshery/meshery/master/.github/assets/images/readme/meshery-logo-dark-text-side.svg">
<img src="https://raw.githubusercontent.com/meshery/meshery/master/.github/assets/images/readme/meshery-logo-dark-text-side.svg"
alt="Meshery Logo" width="70%" /></picture></a><br /><br /></p>
<p align="center">
<a href="https://hub.docker.com/r/meshery/meshery" alt="Docker pulls">
  <img src="https://img.shields.io/docker/pulls/layer5/meshery.svg" /></a>
<a href="https://github.com/issues?q=is%3Aopen%20is%3Aissue%20archived%3Afalse%20(repo%3Ameshery%2Fmeshery%20OR%20repo%3Aservice-mesh-performance%2Fservice-mesh-performance%20OR%20repo%3Aservice-mesh-patterns%2Fservice-mesh-patterns)%20label%3A%22help%20wanted%22" alt="GitHub issues by-label">
  <img src="https://img.shields.io/github/issues/meshery/meshery/help%20wanted.svg?color=informational" /></a>
<a href="https://github.com/meshery/meshery/blob/master/LICENSE" alt="LICENSE">
  <img src="https://img.shields.io/github/license/meshery/meshery?color=brightgreen" /></a>
<a href="https://artifacthub.io/packages/helm/meshery/meshery" alt="Artifact Hub Meshery">
  <img src="https://img.shields.io/endpoint?color=brightgreen&label=Helm%20Chart&style=plastic&url=https%3A%2F%2Fartifacthub.io%2Fbadge%2Frepository%2Fartifact-hub" /></a>  
<a href="https://goreportcard.com/report/github.com/meshery/meshery" alt="Go Report Card">
  <img src="https://goreportcard.com/badge/github.com/meshery/meshery" /></a>
<a href="https://github.com/meshery/meshery/actions" alt="Build Status">
  <img src="https://img.shields.io/github/actions/workflow/status/meshery/meshery/release-drafter.yml" /></a>
<a href="https://bestpractices.coreinfrastructure.org/projects/3564" alt="CLI Best Practices">
  <img src="https://bestpractices.coreinfrastructure.org/projects/3564/badge" /></a>
<a href="https://meshery.io/community#discussion-forums" alt="Discuss Users">
  <img src="https://img.shields.io/discourse/users?label=discuss&logo=discourse&server=http%3A%2F%2Fdiscuss.meshery.io" /></a>
<a href="https://slack.meshery.io" alt="Join Slack">
  <img src="https://img.shields.io/badge/Slack-@meshery.svg?logo=slack" /></a>
<a href="https://twitter.com/intent/follow?screen_name=mesheryio" alt="Twitter Follow">
  <img src="https://img.shields.io/twitter/follow/mesheryio.svg?label=Follow+Meshery&style=social" /></a>
<a href="https://github.com/meshery/meshery/releases" alt="Meshery Downloads">
  <img src="https://img.shields.io/github/downloads/meshery/meshery/total" /></a>  
<!-- <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fmeshery%2Fmeshery?ref=badge_shield" alt="License Scan Report">
  <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmeshery%2Fmeshery.svg?type=shield"/></a>  
  -->
</p>

<h5><p align="center"><i>If you like Meshery, please <a href="https://github.com/meshery/meshery/stargazers">★</a> this repository to show your support! 🤩</i></p></h5>
<p align="center" >
MESHERY IS A CLOUD NATIVE COMPUTING FOUNDATION PROJECT
</p>

<div align="center" width="100%">
<img src="https://raw.githubusercontent.com/meshery-extensions/shape-builder/98531eecdd2c5b01895f1d818f824bf186bf6077/.github/assets/images/readme/cncf-white.svg#gh-dark-mode-only" width="30%" align="center" />
<img src="https://raw.githubusercontent.com/meshery-extensions/shape-builder/98531eecdd2c5b01895f1d818f824bf186bf6077/.github/assets/images/readme/cncf-black.svg#gh-light-mode-only" width="30%" align="center" />
</div>
<br />
<p align="center">
A self-service engineering platform, <a href="https://meshery.io">Meshery</a>, is the open source, cloud native manager that enables the design and management of all Kubernetes-based infrastructure and applications (multi-cloud). Among other features,  As an extensible platform, Meshery offers visual and collaborative GitOps, freeing you from the chains of YAML while managing Kubernetes multi-cluster deployments.
</p>
<br />

<div align="center" width="100%">
 <a href="https://youtu.be/Do7htKrRzDA"><img src="https://raw.githubusercontent.com/meshery-extensions/shape-builder/98531eecdd2c5b01895f1d818f824bf186bf6077/.github/assets/images/readme/thumbnail.png" width="800px" /></a>
 <p><i>Example extension. See other <a href="https://meshery.io/extensions">Meshery Extensions</a>.</i></p>
 <br />Try Meshery in the <a href="https://play.meshery.io">Cloud Native Playground</a> (<a href="https://www.youtube.com/watch?v=034nVaQUyME&list=PL3A-A6hPO2IO_yzN83wSJJUNQActzCJvO&index=9">teaser video</a>)
</div>

# Shape Builder

<img src="https://raw.githubusercontent.com/meshery-extensions/shape-builder/98531eecdd2c5b01895f1d818f824bf186bf6077/.github/assets/images/site.png" width="100%" align="center" />

This Meshery extension offers an easy way to visually create polygons, outputting the format necessary for Kanvas to recognize and render your custom polygon shape. As a best practice, users are encouraged to select an existing or create acustom shape for their components to best visually signify the function of their component. See the [Components Shape Guide](https://docs.meshery.io/extensions/component-shape-guide) for a list of the built-in component shapes in Meshery.

Interactively, explore existing component shapes easily by looking in [Meshery Playground](https://play.meshery.io) in the Kanvas extension's on the dock at the bottom of the screen. You will see the different types of component shapes in the "Shapes" model as examples.

## Usage

Once you have created your custom shape, export your matrix notation and use within a `polygon` shape in your Meshery Component. For example, the following is a plus icon:

#### Custom Shape Example 
![Image](https://github.com/user-attachments/assets/4d022a7a-bb78-44e3-9c95-f36b47bd2c97)

```
-0.33 -1 0.33 -1 0.33 -0.33 1 -0.33 1 0.33 0.33 0.33 0.33 1 -0.33 1 -0.33 0.33 -1 0.33 -1 -0.33 -0.33 -0.33
```

### Additional Details

Anyone can create new components. When they do, they can use a predefined shape to represent their new component. Alternatively, they can define their own polygon; their own shape. The manner in which shapes are defined is based on a number matrix from negative one to positive one.

<div>&nbsp;</div>

## Join the Meshery community!

<a name="contributing"></a><a name="community"></a>
Our projects are community-built and welcome collaboration. 👍 Be sure to see the <a href="https://layer5.io/community/newcomers">Contributor Journey Map</a> and <a href="https://meshery.io/community#handbook">Community Handbook</a> for a tour of resources available to you and the <a href="https://layer5.io/community/handbook/repository-overview">Repository Overview</a> for a cursory description of repository by technology and programming language. Jump into community <a href="https://slack.meshery.io">Slack</a> or <a href="https://meshery.io/community#discussion-forums">discussion forum</a> to participate.

<p style="clear:both;">

<a href ="https://meshery.io/community/meshmates"><img alt="MeshMates" src="https://meshery.io/assets/images/logos/meshmate-light.svg" style="margin-right:36px; margin-bottom:7px;" width="140px" align="left" /></a>

<h3>Find your MeshMate</h3>

<p>MeshMates are experienced community members, who will help you learn your way around, discover live projects, and expand your community network. Connect with a Meshmate today!</p>

Learn more about the <a href="https://meshery.io/community#meshmates">MeshMates</a> program. <br />

</p>
<br /><br />
<div style="display: flex; justify-content: center; align-items:center;">
<div>
<a href="https://meshery.io/community"><img alt="Cloud Native Community" src="https://docs.meshery.io/assets/img/readme/community.png" width="140px" style="margin-right:36px; margin-bottom:7px;" width="140px" align="left"/></a>
</div>
<div style="width:60%; padding-left: 16px; padding-right: 16px">
<p>
✔️ <em><strong>Join</strong></em> any or all of the weekly meetings on <a href="https://meshery.io/calendar">community calendar</a>.<br />
✔️ <em><strong>Watch</strong></em> community <a href="https://www.youtube.com/@mesheryio?sub_confirmation=1">meeting recordings</a>.<br />
✔️ <em><strong>Fill-in</strong></em> a <a href="https://meshery.io/newcomers">member form</a> and gain access to community resources.
<br />
✔️ <em><strong>Discuss</strong></em> in the <a href="https://meshery.io/community#discussion-forums">community forum</a>.<br />
✔️ <em><strong>Explore more</strong></em> in the <a href="https://meshery.io/community#handbook">community handbook</a>.<br />
</p>
</div><br /><br />
<div>
<a href="https://slack.meshery.io">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/meshery/meshery/master/.github/assets/images/readme/slack.svg"  width="110px" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/meshery/meshery/master/.github/assets/images/readme/slack.svg" width="110px" />
  <img alt="Shows an illustrated light mode meshery logo in light color mode and a dark mode meshery logo dark color mode." src="https://raw.githubusercontent.com/meshery/meshery/master/.github/assets/images/readme/slack.svg" width="110px" align="left" />
</picture>
</a>
</div>
</div>
<br /><br />
<p align="left">
&nbsp;&nbsp;&nbsp;&nbsp; <i>Not sure where to start?</i> Grab an open issue with the <a href="https://github.com/issues?q=is%3Aopen%20is%3Aissue%20archived%3Afalse%20(repo%3Alayer5io%2Flayer5%20OR%20repo%3Ameshery%2Fmeshery%20OR%20repo%3Aservice-mesh-performance%2Fservice-mesh-performance%20OR%20repo%3Aservice-mesh-patterns%2Fservice-mesh-patterns)%20label%3A%22help%20wanted%22">help-wanted label</a>.
</p>
<br /><br />

<div>&nbsp;</div>

## Contributing

Please do! We're a warm and welcoming community of open source contributors. Please join. All types of contributions are welcome. Be sure to read the [Contributor Guides](https://docs.meshery.io/project/contributing) for a tour of resources available to you and how to get started.

<!-- <a href="https://youtu.be/MXQV-i-Hkf8"><img alt="Deploying Linkerd with Meshery" src="https://docs.meshery.io/assets/img/readme/deploying-linkerd-with-meshery.png" width="100%" align="center" /></a> -->

<div>&nbsp;</div>

### Stargazers

<p align="center">
  <i>If you like Meshery, please <a href="../../stargazers">★</a> star this repository to show your support! 🤩</i>
 <br />
<a href="../../stargazers">
 <img align="center" src="https://api.star-history.com/svg?repos=meshery/meshery&type=Date" />
</a></p>

### License

This repository and site are available as open-source under the terms of the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).


<!--### Community

See an <a href="https://layer5.io/community/handbook/repository-overview">overview of repositories</a> and projects by tech stack in the <a href="https://meshery.io/community#handbook/">Community Handbook</a>.

## See Meshery in Action

- [DockerCon 2020](https://docker.events.cube365.net/docker/dockercon/content/Videos/63TCCNpzDC7Xxnm8b) | ([video](https://www.youtube.com/watch?v=5BrbbKZOctw&list=PL3A-A6hPO2IN_HSU0pSfijBboiHggs5mC&index=4&t=0s), [deck](https://calcotestudios.com/talks/decks/slides-dockercon-2020-service-meshing-with-docker-desktop-and-webassembly.html))
- [Deploying Linkerd with Meshery](https://youtu.be/MXQV-i-Hkf8)
- [KubeCon EU 2019](https://kccnceu19.sched.com/event/MPf7/service-meshes-at-what-cost-lee-calcote-layer5-girish-ranganathan-solarwinds?iframe=no&w=100%&sidebar=yes&bg=no) | ([video](https://www.youtube.com/watch?v=LxP-yHrKL4M&list=PLYjO73_1efChX9NuRaU7WocTbgrfvCoPE), [deck](https://calcotestudios.com/talks/decks/slides-kubecon-eu-2019-service-meshes-at-what-cost.html))
- Istio Founders Meetup @ KubeCon EU 2019 | [deck](https://calcotestudios.com/talks/decks/slides-istio-meetup-kubecon-eu-2019-istio-at-scale-large-and-small.html)
- [Cloud Native Rejekts EU 2019](https://cfp.cloud-native.rejekts.io/cloud-native-rejekts-eu-2019/speaker/GZQTEM/) | [deck](https://calcotestudios.com/talks/decks/slides-cloud-native-rejekts-2019-evaluating-service-meshes.html)
- [DockerCon 2019 Open Source Summit](https://dockercon19.smarteventscloud.com/connect/sessionDetail.ww?SESSION_ID=309149&tclass=popup#.XJxH-TOcbjI.twitter) | [deck](https://calcotestudios.com/talks/decks/slides-dockercon-2019-establishing-an-open-source-office.html), [video](https://www.docker.com/dockercon/2019-videos?watch=open-source-summit-service-mesh)
- [Container World 2019](https://tmt.knect365.com/container-world/speakers/lee-calcote) | [deck](https://calcotestudios.com/talks/decks/slides-container-world-2019-service-meshes-but-at-what-cost.html)
- [Service Mesh Day](https://servicemeshday.com/schedule.html) | [deck](https://docs.google.com/presentation/d/1HwG03okX3DHgGKbma4PL-MO7Xr9zDrjQgd05PRi9i8E/edit?usp=sharing), [video](https://youtu.be/CFj1O_uyhhs)
- [Innotech San Antonio](https://innotechsanantonio2019.sched.com/event/Lmlb/the-enterprise-path-to-service-mesh-architectures?iframe=no&w=100%&sidebar=yes&bg=no) | [deck](https://calcotestudios.com/talks/decks/slides-innotech-san-antonio-2019-the-enterprise-path-to-service-mesh.html)
- [CNCF Networking WG](https://github.com/cncf/wg-networking) | [deck](https://www.slideshare.net/leecalcote/benchmarking-service-meshes-cncf-networking-wg-141938576), [video](https://www.youtube.com/watch?v=2_JwCc-kLMA&list=PLYjO73_1efChX9NuRaU7WocTbgrfvCoPE)
-->
