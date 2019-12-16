# File system explorer

Pachyderm is divided into two parts: the Pachyderm File System (PFS) and the Pachyderm Processing System (PPS). In the spirit of PFS, we're going to be working with a file system API to build a simple file browser.


## Working Conditions

This type of problem is utilized to simulate a realistic working interaction. So, please ask questions, discuss design decisions, and feel free to use whatever internet resources (including open source tools) you wish.

We expect you to spend roughly 3 hours, meaning when you wrap up, there will likely be more you _could_ have done. We leave it to you to decide how to trade off polish and styling for more functionality (though we're happy to consult if you have specific questions or tradeoffs you'd like to discuss). If you'd like to take a bit longer, that's OK too, but if you choose to do so, please consult with us about extending the time before the three-hour mark.


## Getting started

While we're not expecting you to be a graphic designer, we are looking for you to have some sense of UX tradeoffs/sensible layout, so we will be looking at the way you choose to present the information, as well as the raw JS code written.

To get started:

* Fork this repository so you can make changes.
* Check out one of the prepared branches with your framework of choice (e.g. `git checkout react`), or install your own framework.
* Run `npm install` to download the dependencies.
* Run `npm serve` to run the backend server and serve frontend assets.
* Direct your browser to `localhost:8080` to view the frontend.


## Requirements

Following the provided wireframes [1](wireframe_main.png) [2](wireframe_modal.png), write a single-page application that can browse through the files served by the backend.  This should show two panels, the left one showing a hierarchy of directories and files, and the right one showing the contents of the selected file.

It is encouraged to use third-party libraries where appropriate, such as state management, icons, file-type rendering, etc.

### Basic Requirements

It is your goal to fulfill these basic requirements in this project. 

#### Directory tree

The left panel shows a tree of directories and files that can be fetched from the backend.  This should be lazily populated as the user opens and closes directories.  The frontend should cache this data in local state management of some kind (e.g. redux, mobx, etc).

The currently open filepath should be encoded in the URL and kept up-to-date so that if the user refreshes, the same file will be open.  In addition, this should work with the browser history so that the back button will look at the previously opened file (if any).

#### File contents

When a file has been selected, its contents should be shown in the panel on the right.  As part of the basic requirements, this should render text and images sensibly, and show some placeholder for binary files or video.  There is a stretch requirement for adding more user-friendly displays for different file types.

The static files served by the backend contains:

* markdown (`.md`)
* images (`.jpg`, `.png`)
* plaintext (`.txt`)
* javascript code (`.js`)
* binary (`.bin`)
* video (`.mp4`)

#### File metadata

The 'Details' button for a file in the directory tree should open up a [modal](wireframe_modal.png) showing the file metadata fetched from the directory entry on the backend.

#### Other considerations

Good loading states, empty states, and error states are strongly encouraged, although no design guidance is specified.


### Stretch Requirements

If the basic requirements are filled and you still have time, you can add from the list of features below.

#### Mobile breakpoints

Adapt the styling of the page to the screen that it is displayed on so that it is usable on different devices.

#### File type styling

Add specific styling for more file types, such as rendering markdown, syntax-highlighting code, or displaying video.

#### Download button

Add a download button to download any given file to your machine.


## Backend API

The backend is a fairly simple server serving the files found in `frontend-interview/files` under `localhost:8080/files`.  In addition, `GET` requests to any directories in that path will return a JSON listing on the entries in the directory:

```js
{
  path: string // the requested path within the statics directory
  entries: array // an array of entries in the directory
}
```

```js
{
  name: string, // the filename of the entry, not the full path
  type: 'dir' | 'file',
  size: number, // only for files
  created: number, // timestamp in ms since the unix epoch, only for files
  modified: number, // timestamp in ms since the unix epoch, only for files
}
```


## Scoring

When you are done, push to your fork on github and notify us so we can make sure the frontend works in our environment.  We will go over the code and design.  Your design will be judged based on these factors, in order of importance:

* fulfilling basic requirements
* lack of defects
* component design, future-proofing, extensibility, and maintainability of your code
* adherence to the wireframe and style guidelines
* additional features implemented

[wireframe-reference]: https://wireframe.cc/pro/pp/8c09cab40300197
