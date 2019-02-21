---
title: "👋 🌍 with React + Rust + WASM"
date: "2019-02-18"
excerpt: "Up and running with create-react-app + WASM"
publish: true
---

Go through the setup docs <a href="https://rustwasm.github.io/book/game-of-life/setup.html">here</a>. Install the <a href="https://www.rust-lang.org/tools/install">Rust toolchain</a>, <a href="https://rustwasm.github.io/wasm-pack/installer/">wasm-pack</a>, <a href="https://rustwasm.github.io/book/game-of-life/setup.html#cargo-generate">cargo-generate</a>, and make sure <a href="https://www.npmjs.com/get-npm">npm</a> is installed and up to date.

This post assumes basic familiarity with the command line, React, and the basics of Rust tooling. If you get stuck, the <a href="https://doc.rust-lang.org/book/">Rust Book</a> and <a href="https://reactjs.org/tutorial/tutorial.html">Intro to React</a> are great places to start.

I'm roughly following the setup <a href="https://rustwasm.github.io/book/game-of-life/hello-world.html">here</a> but I'll go through each file.

Our project will have 2 main directories inside of the root, `lib`, which will house our Rust code, and `app`, which will house our React app. For local development, we'll use `npm link` to get around needing to deploy our `wasm` code as a module, so these two directories really don't need to be next to each other, I'm just doing so for convenience. For production, you'll need to deploy your wasm code to `npm` as a package, then from your app, you'll simply `import('package-name')` and use like you would any other package on `npm`.

First, make a directory and move into it.

```txt
mkdir hello-there && cd hello-there
```

Next, let's add our Rust code. I'm putting it in `hello-there/lib`.

```txt
mkdir lib && cd lib
```

Let's add our Cargo.toml, which will act as a manifest for our Rust library.

```txt
[package]
name = "hello-there"
version = "0.1.0"
authors = ["Preston Richey <nospampls@email.com>"]

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
wasm-bindgen = "=0.2.34"
```
Note: we need this `wasm-bindgen` version because of <a href="https://github.com/rustwasm/book/issues/148#issuecomment-463809784">reasons</a>.

I'm omitting some niceties included in the Rust book setup doc, like allocation optimizations and an improved error handling. (<a href="https://github.com/rustwasm/wasm-pack-template/blob/master/Cargo.toml">Link here.</a>) You should probably include those if you plan on going further than this tutorial, but for the sake of simplicity I'll leave that as an exercise for the reader. (That's you!)

Next, let's initialize our React app. I'll use <a href="https://github.com/facebook/create-react-app">create-react-app</a>, which should be in any React developer's toolkit:

```bash
npx create-react-app app
```

Create a `Cargo.toml` file at the root, which is used as a manifest which documents metadata about our Rust project including name, authors, and dependencies.
