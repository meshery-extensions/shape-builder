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
</p>

<h5><p align="center"><i>If you like Meshery, please <a href="https://github.com/meshery/meshery/stargazers">★</a> this repository to show your support! 🤩</i></p></h5>

<p align="center">
MESHERY IS A CLOUD NATIVE COMPUTING FOUNDATION PROJECT
</p>

<div align="center" width="100%">
<img src="https://raw.githubusercontent.com/meshery-extensions/shape-builder/98531eecdd2c5b01895f1d818f824bf186bf6077/.github/assets/images/readme/cncf-white.svg#gh-dark-mode-only" width="30%" align="center" />
<img src="https://raw.githubusercontent.com/meshery-extensions/shape-builder/98531eecdd2c5b01895f1d818f824bf186bf6077/.github/assets/images/readme/cncf-black.svg#gh-light-mode-only" width="30%" align="center" />
</div>
<br />

<p align="center">
A self-service engineering platform, <a href="https://meshery.io">Meshery</a>, is the open source, cloud native manager that enables the design and management of all Kubernetes-based infrastructure and applications (multi-cloud). Among other features, As an extensible platform, Meshery offers visual and collaborative GitOps, freeing you from the chains of YAML while managing Kubernetes multi-cluster deployments.
</p>
<br />

<div align="center" width="100%">
 <a href="https://youtu.be/Do7htKrRzDA"><img src="https://raw.githubusercontent.com/meshery-extensions/shape-builder/98531eecdd2c5b01895f1d818f824bf186bf6077/.github/assets/images/readme/thumbnail.png" width="800px" /></a>
 <p><i>Example extension. See other <a href="https://meshery.io/extensions">Meshery Extensions</a>.</i></p>
 <br />Try Meshery in the <a href="https://play.meshery.io">Cloud Native Playground</a> (<a href="https://www.youtube.com/watch?v=034nVaQUyME&list=PL3A-A6hPO2IO_yzN83wSJJUNQActzCJvO&index=9">teaser video</a>)
</div>

# Shape Builder

<img src="https://raw.githubusercontent.com/meshery-extensions/shape-builder/98531eecdd2c5b01895f1d818f824bf186bf6077/.github/assets/images/site.png" width="100%" align="center" />

This Meshery extension offers an easy way to visually create polygons, outputting the format necessary for Kanvas to recognize and render your custom polygon shape. As a best practice, users are encouraged to select an existing or create a custom shape for their components to best visually signify the function of their component. See the [Components Shape Guide](https://docs.meshery.io/extensions/component-shape-guide) for a list of the built-in component shapes in Meshery.

Interactively, explore existing component shapes easily by looking in [Meshery Playground](https://play.meshery.io) in the Kanvas extension's on the dock at the bottom of the screen. You will see the different types of component shapes in the "Shapes" model as examples.

<div>&nbsp;</div>

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (v8 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **make** (optional) - Pre-installed on most Linux and macOS systems

### Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/meshery-extensions/shape-builder.git
cd shape-builder
```

#### 2. Navigate to Site Directory

The main application code is located in the `site/` directory:

```bash
cd site
```

#### 3. Install Dependencies

```bash
npm install
```

#### 4. Start Development Server

```bash
npm start
```

Or alternatively:

```bash
npm run develop
```

The application will be available at: **http://localhost:8000**

### 📂 Project Structure

```
shape-builder/
├── .github/          # GitHub workflows and configurations
├── .vscode/          # VS Code settings
├── build/            # Build output directory
├── site/             # Main application code (START HERE!)
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Footer/
│   │   │   ├── Navigation/
│   │   │   └── ShapeBuilder/  # Main shape builder component
│   │   ├── pages/        # Page components
│   │   └── styles/       # Global styles
│   ├── package.json      # Dependencies and scripts
│   └── gatsby-config.js  # Gatsby configuration
├── README.md
└── LICENSE
```

### 🛠️ Available Scripts

Once inside the `site/` directory, you can run:

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on http://localhost:8000 |
| `npm run develop` | Same as `npm start` |
| `npm run build` | Build the production-ready site |
| `npm run serve` | Serve the production build locally |
| `npm run clean` | Clean Gatsby cache and public directory |
| `npm run lint` | Run linter to check code quality |

### 🔧 Using Make Commands (Optional)

For contributors who prefer using `make` instead of running individual `npm` commands, this project provides a Makefile with commonly used commands to simplify setup and development.

#### Quick Start with Make

```bash
# Clone the repository
git clone https://github.com/meshery-extensions/shape-builder.git
cd shape-builder

# Install dependencies
make setup

# Run the project locally
make run
```

#### Available Make Commands

| Command | Description |
|---------|-------------|
| `make help` | Display all available make commands |
| `make setup` | Install all required dependencies |
| `make run` | Start the local development server |
| `make build` | Create a production build |
| `make clean` | Clean Gatsby cache and build artifacts |
| `make lint` | Run linting checks |

### 🐛 Troubleshooting

#### Port Already in Use

If port 8000 is already in use:

```bash
# Kill the process using port 8000
lsof -ti:8000 | xargs kill -9

# Or use a different port
npm start -- -p 3000
```

#### Cache Issues

If you encounter build issues:

```bash
npm run clean
npm install
npm start
```

#### Node Version Issues

Ensure you're using the correct Node.js version:

```bash
# Check Node version
node --version

# If using nvm, switch to recommended version
nvm use
```

<div>&nbsp;</div>

## 💡 Usage

Once you have created your custom shape, export your matrix notation and use within a `polygon` shape in your Meshery Component. For example, the following is a plus icon:

### How to Create a Custom Shape

1. **Start the Application** - Open http://localhost:8000 in your browser
2. **Click on Canvas** - Click multiple points to create your polygon shape
3. **Close the Shape** - Double-click or click "Close Shape" button
4. **Get Coordinates** - Copy the generated coordinates from the output box
5. **Use in Meshery** - Paste the coordinates in your Meshery component definition

#### Custom Shape Example 

![Image](https://github.com/user-attachments/assets/4d022a7a-bb78-44e3-9c95-f36b47bd2c97)

**Generated Coordinates:**
```
-0.33 -1 0.33 -1 0.33 -0.33 1 -0.33 1 0.33 0.33 0.33 0.33 1 -0.33 1 -0.33 0.33 -1 0.33 -1 -0.33 -0.33 -0.33
```

### Keyboard Shortcuts

- **Ctrl + Click** - Snap to precise grid (fine control)
- **Enter** or **Escape** - Close current shape
- **Ctrl + Z** - Undo last point
- **Double Click** - Close shape

### Additional Details

Anyone can create new components. When they do, they can use a predefined shape to represent their new component. Alternatively, they can define their own polygon; their own shape. The manner in which shapes are defined is based on a number matrix from negative one to positive one.

<div>&nbsp;</div>

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### For New Contributors

1. **Fork the repository** - Click the "Fork" button at the top right
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/shape-builder.git
   cd shape-builder/site
   ```
3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** - Edit files in `site/src/`
5. **Test your changes**
   ```bash
   npm start
   ```
6. **Commit with sign-off**
   ```bash
   git add .
   git commit -s -m "[Component] Description of changes"
   ```
7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Create a Pull Request** - Go to the original repository and click "New Pull Request"

### Contribution Guidelines

- ✅ Follow the existing code style
- ✅ Write clear commit messages
- ✅ Sign your commits (`git commit -s`)
- ✅ Test your changes before submitting
- ✅ Include screenshots for UI changes
- ✅ Reference related issues in your PR

Please read our [Contributor Guides](https://docs.meshery.io/project/contributing) for more details.

### 📝 Commit Message Format

```
[Component] Brief description

Detailed explanation of what changed and why.

Fixes #issue_number
```

Example:
```
[ShapeBuilder] Fix copy button visibility with long coordinates

Changed button positioning from absolute to sticky with flexbox layout
to ensure visibility regardless of coordinate length.

Fixes #89
```

<div>&nbsp;</div>

## Join the Meshery community!

<a name="community"></a>
Our projects are community-built and welcome collaboration. 👍 Be sure to see the <a href="https://layer5.io/community/newcomers">Contributor Journey Map</a> and <a href="https://meshery.io/community#handbook">Community Handbook</a> for a tour of resources available to you and the <a href="https://layer5.io/community/handbook/repository-overview">Repository Overview</a> for a cursory description of repository by technology and programming language. Jump into community <a href="https://slack.meshery.io">Slack</a> or <a href="https://meshery.io/community#discussion-forums">discussion forum</a> to participate.

<p style="clear:both;">

<a href="https://meshery.io/community/meshmates"><img alt="MeshMates" src="https://meshery.io/assets/images/logos/meshmate-light.svg" style="margin-right:36px; margin-bottom:7px;" width="140px" align="left" /></a>

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
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/meshery/meshery/master/.github/assets/images/readme/slack.svg" width="110px" />
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

## 📊 Stargazers

<p align="center">
  <i>If you like Meshery, please <a href="../../stargazers">★</a> star this repository to show your support! </i>
 <br />
<a href="../../stargazers">
 <img align="center" src="https://api.star-history.com/svg?repos=meshery-extensions/shape-builder&type=Date" />
</a></p>

## 📄 License

This repository and site are available as open-source under the terms of the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).

---

<p align="center">
Made with ❤️ by the Meshery community
</p>