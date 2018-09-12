# Q&A 01 - Vue CLI 3

## Guillaume Chau and Evan You

**Moderator**

Welcome everyone and let's have a good time for the upcoming hour!

Today we're meeting with Guillaume Chau and Evan You, the masterminds behind the new Vue-CLI 3. Thank you very much for joining us here today and delivering such a great release.

The rules are simple. You can ask questions by adding [Q&A] tag before them. There can be max 3 questions in the queue at the same time, if there are more, you'll have to wait and ask after one of them gets answered. Make sure to keep your question safe in the clipboard! The moderators will manage the queue and inform when new questions can be asked.

If your question gets answered, you can ask a short follow up question too. But if there's more of them, please save them for after the event. All the answers will be available in the Q&A transcription on our chat's website.

<guest name="Evan You" />

Hi everyone.

<guest name="Guillaume Chau" />

(Guillaume actually greeted with a waving hand and a cat emoticon, so here's a picture of a cat waving its paw)

<img src="https://media.giphy.com/media/jbcjNsyVeWrK/giphy.gif" />

## Vue CLI

**Lloyd**

What would you say to someone not convinced about using Vue CLI? While I'm a user, I have coworkers that prefer hand rolling everything such as the Babel and Webpack configuration - this has led to lots of extra time spent debugging configuration files. Apparently that isn't enough to persuade them!

<guest name="Guillaume Chau" />

You can customize everything in Vue CLI, so it's not a drawback. And it's upgradable too.

<guest name="Evan You" />

Most aspects of the configuration is still open to modification even if you are using Vue CLI. If they fear losing flexibility, you can show them how everything is still configurable.

---

**Elfayer**

The plugin system is super easy to use, but there are a lot that are not working/incompatible with Vue CLI 3 boilerplate. Do you have a plan to ensure their safety? Manual/auto validation or some kind of badge such as the official one.

<guest name="Evan You" />

The official plugins are always under the @vue/ organization. For 3rd party plugins, I'm not sure what you mean by not working - some of them may have been created during the beta/rc phase, so I'd wait for some time before the ecosystem stablizes.

<guest name="Guillaume Chau" />

The users can submit issues to the plugins if they don't work correctly, but I don't think we have the time to manually check them all.

---

**gusto**

How did the process of working on new Vue CLI look like and what part of the new Vue CLI was the most difficult to write?

<guest name="Evan You" />

I actually spent a long time designing how it would work. One of the difficult parts was figuring out how to make plugins contain both the scaffolding part (generator) AND the runtime configuration tweaks.

And then a lot of work went into making sure all plugin combinations actually work together.

---

**Elfayer**

Is there any plan to integrate Parcel on Vue CLI? Might bring better performance and less configuration. Note I think Vue CLI 3 is awesome, I'm just interested in the decision making.

<guest name="Evan You" />

We are not planning to integrate Parcel. Parcel's positioning is a bit different from webpack now, where it's trying to be a full development tool instead of just a bundler.
It's also (still) not as feature rich and configurable as Webpack.

---

**gileneusz**

Hi Evan, are there plans to provide native Vue.js plugin for API authentication, provided by the core team? Those third party packages are okay, but seem to be sometimes difficult to configure.

<guest name="Guillaume Chau" />

There's no such plan as far as I know.

<guest name="Evan You" />

The authentication involves too many variants (your server setup, auth model etc) and it's not quite feasible for us to provide one single solution.

---

**Tertia**

Are there any plans to have a CLI plugin for NativeScript/NativeScript-Vue?

<guest name="Guillaume Chau" />

Nativescript team plans to do a plugin for Vue CLI 3. Then they will deprecate the current Vue CLI 2 nativescript template.

---

**Victor**

Are there any plans for official Electron support in Vue CLI 3?

**Jacz**

Are there any plans to support other types of templates like nativescript and vue-native?

<guest name="Guillaume Chau" />

No official plans but it should already be possible with the plugin API.

<guest name="Evan You" />

Vue CLI 3 is designed specifically around web applications, although the underlying architecture may apply to alternative targets - we want to make the plugin system support that, but that's not going to be our main focus.

---

**Kaelwd** (Vuetify)

How will the version mismatches be handled? Our Vue CLI plugin has been broken several times by API changes or when the user has an older version installed. Should we just parse the installed cli version and block installation if it isn't supported?

<guest name="Guillaume Chau" />

We follow semver, so while it was on beta we did breaking changes, but now that it's stable, there won't be any until Vue CLI 4.0.

<guest name="Evan You" />

We still had breaking changes during RC phases, but will be more stable now that it's officially 3.0.

---

**Jacz**

Are there any plans to allow users to specify the configurations for eslint during the UI setup when creating a project using the UI? eslint is just an example btw

<guest name="Evan You" />

That would make the creation process too complicated. You can always pick a base config and tweak it after project creation.

<guest name="Guillaume Chau" />

You can already configure the important settings in the UI while creating a project, and then you have a ESlint plugin vue configuration screen in your project.

---

**gusto**

Have you thought of providing file generators in Vue CLI, like for example in Ember CLI?

<guest name="Evan You" />

Unlike Ember, Vue CLI is less opinionated on file structure, i.e. you can arrange files anyway you want. So we are not positioned to do file generation. But! You can write your own plugin for that. ;)

---

**Elfayer**

Will Vue CLI be able to suggest improvements, as the Google Chrome Light House does?

<guest name="Evan You" />

Maybe as a plugin. :) That's a good idea actually, we may consider it in the future.

<guest name="Guillaume Chau" />

I have talked about this with CompuIves from Codesandbox, it might come in some way or another. We could have some kind of diagnosis system similar to what Codesandbox does to some extent and suggest things from the errors. By the way, the UI already has a basic Suggestion API.

---

**gusto**

Were there some features that you decided not to include into Vue CLI 3 although they were suggested and considered, or you're waiting for them until the next Vue CLI or Vue releases?

**Elfayer**

Is there any new feature/big improvement awaiting coming to Vue CLI 3 now that it is released?

**Lloyd**

What is on the roadmap for Vue CLI 4?

<guest name="Guillaume Chau" />

I don't think we have a roadmap for Vue CLI 4 yet, we just released 3.0. :) But I have a lot of things planned for the UI. There's an unannounced big feature for Vue CLI UI I have in the design phase and there will be a more options on the settings page.

<guest name="Evan You" />

The missing features that we want to eventually add to Vue CLI are a vue upgrade command and a better error overlay. Also we are waiting for Babel 7's final release - will likely be in 3.1.

(Babel 7 was officially released a week later - gusto)

**Lloyd**

Which ES version will Vue CLI support when Babel 7 is released? I know they are removing Stages from Babel 7 which sounds like it could affect how a lot of people use Babel currently.

<guest name="Guillaume Chau" />

We are including the most popular experimental syntax plugins by default, you can easily add more. Babel only removed the stages, which were collections of syntax plugins.

<guest name="Evan You" />

We only support a small set of these features: https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/babel-preset-app/README.md#stage-3-or-below

---

**tomoko**

Hi, Evan, it's pleasure to meet you. Is it better to use Vue CLI with Node.js on server side? I just feel that it takes too much time to compile browser version each time you made changes.

<guest name="Guillaume Chau" />

The Vue CLI works with Node.js, but the build performance is dependent on Webpack.

---

**hovercraftii**

Is there a way for 3rd party plugins to use the Webpack dashboard in CLI UI without it interfering with the regular build/serve?

<guest name="Guillaume Chau" />

You can load it in your tasks (it's always loaded) and use the Shared Data API with the same IDs.

---

**tomoko**

There are templates generated by Vue CLI, isn't it overwhelmed to mix JS, CSS and HTML in one file?

<guest name="Evan You" />

A lot of people like Vue specifically because of Single File Components. It reduces the need to context-switch when you work on a single component. The three parts are tightly coupled by nature, since they belong to the same component (i.e. the same piece of concern in your app).

---

**Jacz**

When working on Vue CLI do you ever look at other JS framework CLIs to get some ideas of what other ideas you could implement while developing new versions and if so do you ever feel not OK of taking other projects ideas. A bit of a weird question but I'm interested to see if devs are "ashamed" to get ideas from other projects.

<guest name="Guillaume Chau" />

I think most people are taking our UI idea from Mars nowadays. :)

## Roadmap

**Elfayer**

What is the next big focus after Vue CLI 3 release, any other surprise to expect?

<guest name="Guillaume Chau" />

The release of vue-devtools 5.0 beta.

<guest name="Evan You" />

I'm getting back to core, merging PRs and preparing 2.6 release. A lot of features are lined up for 2.6 already.

---

**Jacz**

What is the estimated time frame for Vue 3? (i'd assume late next year)

<guest name="Guillaume Chau" />

When it's ready™

<guest name="Evan You" />

There's no concrete timeline yet, but we will announce it at least 6 months before the release.

---

**jen.looper**

What are the top three biggest changes for Vue 3? (sorry I always ask Trivial Pursuit style questions)

<guest name="Guillaume Chau" />

Vue 3 will be split into multiple packages, but you will still be able to install Vue and get started directly.

<guest name="Evan You" />

The public API changes that affect how you write Vue code will be minimal. Biggest changes are all internal:

1. TypeScript
2. The core refactored into decoupled modules
3. The ability to swap parts of the core for experimental features

---

**Laran**

What's the coolest feature you would like to add, but can't (at least for now) due to limitations of legacy browsers?

**Kas**

Are there certain features that Vue originally was supposed to have but had to be removed? :innocent:

<guest name="Evan You" />

Proxy-based observation, but that we will introduce in 2.x-next.

---

**George**

What are your thoughts and/or medium to long-term plans on typescript, and typescript with Vue?

<guest name="Guillaume Chau" />

Continue working on better support for it. :) Also it's a built-in feature of Vue CLI 3

<guest name="Evan You" />

In Vue 3, the core will be refactored to use TypeScript. In that process we also plan to improve general type-friendlyness of the APIs.

<guest name="Guillaume Chau" />

Instead of flow which we are currently using.

---

**gusto**

Will Vue officially support class-based syntax for components? I remember you writing in the Vue 1 times that class-based syntax is just an addition and won't become an official version of components, but with Vue 3 rewrite in Typescript, are you going to keep the objects as main official way to write the components?

<guest name="Evan You" />

We will likely support class-based syntax as a first-class citizen, but object-based syntax will definitely still be supported for compatibility. It depends a lot on the new decorator syntax being stage 3+.

---

**trgk**

How can I propose a feature for vue 3? Something like PEP in python.

<guest name="Evan You" />

We will have an RFC repo like Rust/React.

---

**jen.looper**

Over the moon about integrating NativeScript-Vue with DevTools. Greatest thing since sliced bread. How do you think DevTools might be made even more awesome? I guess this is a roadmap question.

<guest name="Guillaume Chau" />

Everything that will be in devtools 5.0 beta means way better devtools with 2 times more features. :P And we have more smaller enhancements planned.

---

**reynerhl**

If Vue 3 (or 2.x-next) will be adding Proxy-based observation, will this imply some changes for Vuex in order to make Vuex a little more easy to use?

<guest name="Guillaume Chau" />

We are experimenting with merging mutations and actions in order to make Vuex easier to use, but that's not related to reactivity.

<guest name="Evan You" />

Not specifically for Vuex - you will no longer need to use Vue.set because we will be able to detect new property additions and array index setting (foo[id] = item).

<guest name="Guillaume Chau" />

Also using proxies will potentially be faster.

---

**vicbergquist**

Are there any plans for an official accessibility plugin for Vue, to position Vue as THE framework for a more accessible web? Or is this just up to 3rd party plugins?

<guest name="Evan You" />

Accessibility is a rather challenging problem domain because it has a lot to do with the specific type of interface you are building. I don't think it's something that can be solved by a plugin - it's more about awareness and best practices.

<guest name="Guillaume Chau" />

We could have some accessibility-related recipes in the cookbook or some advice in the guide however.

<guest name="Evan You" />

Yeah, we can always address that via documentation.

---

**tomoko**

When will we get easy to install plugins for Netbeans and others free IDE to highlight .vue files?

**Moderator**

(OK, this question was missed during the event, but let me provide the answer anyways - gusto)

How I see it, that totally depends on the community - each IDE works with a different plugins system so it requires a good knowledge of particular environment which Vue.js core devs can't focus on themselves - it's not their area of specialization. The IDE integration for Vue in VSCode was a community effort, while with Webstorm it was written by people in JetBrains.

## Other questions

**superdiana**

This might not be fully related to the Vue Cli, but i’d like to know what are your efforts to support diversity in Vue?

<guest name="Evan You" />

I'm on the board for Vue Vixens and we collaborate with them in Vue events around the world to help female developers get into Vue.

In terms of cultural diversity, I think we are doing pretty well - the core team is literally from all over the world, so are the users.

---

**Laran**

Although Vue ecosystem libraries like Vuex, router, CLI etc. are mainteined by many people (mainly core team), the "most important" part, which is Vue core seems to be maintained only by Evan (source: https://github.com/vuejs/vue/graphs/contributors). How do you plan to change that?

<guest name="Evan You" />

I'm aware of that, but it's less accurate to say I'm the only person doing the work now - I am the only person merging PRs, yes, but those PRs are from many different people.

Also we are already in the design phase for v3, where a big focus will be refactoring the architecture so each part of core is easier to contribute to.

---

**jen.looper**

What would you say is the easiest way for someone to contribute to the Vue Ecosystem, other than contributing to the docs which is the usual 'first timer' contributor path?

<guest name="Evan You" />

Look around the vuejs organization of GitHub. There are a lot of repositories - some of them will have issues marked with "contribution welcome" or "help wanted" - these are usually good for first-time contributors as well.

In addition, just helping us triaging issues is already good help.

---

**tomoko**

VueJS and ReactJs are both reactive and similar in many ways. Can you name any other reactive frameworks that could compete with VueJS?

<guest name="Guillaume Chau" />

Vue reactivity is more similar to MobX.

---

**jen.looper**

What was the one takeaway you discovered as a team from the recent sprint?

<guest name="Guillaume Chau" />

Being at the same time at the same place helped a lot communicating, deciding and giving feedback, Also, working full-time (instead of working during the free time), so we were able to do a lot of progress on different projects like the devtools, eslint and JSX support

---

**gileneusz**

How are you Evan by the way? :)

<guest name="Evan You" />

I'm doing great haha.

---

**superdiana**

Any plans on coming to Latin America? Vue is becoming a trend and maybe Spanish support isn't pairing up yet (documentation wise).

<guest name="Evan You" />

I personally don't know Spanish (or Portuguese) so it could be tough for me - but it seems there's an active community in Brazil.

<guest name="Guillaume Chau" />

We are open to any translation for the core as long as it stays maintained.

---

**Tertia**

What part of core/cli/ecosystem lacks contributions the most?

<guest name="Evan You" />

It's actually a hard question. :) I think as a whole there's not significant difference between parts of the ecosystem - we welcome all kinds of contributions.

---

**tomoko**

Do you develop some web application using Vue and Vue CLI or do you just develop framework itself?

<guest name="Guillaume Chau" />

Yes I work on Vue apps, at work and for personal projects.

---

**Isaac**

What was the most challenging part of Vue for you to write?

<guest name="Evan You" />

The most challenging part is probably getting nested slots passing to behave correctly... I think they are still not 100% correct. ;)

## Last words

**Moderator**

Thank you very much for joining our event.

Thank you Guillaume and Evan for accepting our invitation and great answers. Thank you all for interesting questions.

The whole transcription of the event will be available on our new official chat website and we hope to invite you soon for the next Q&A session.

<guest name="Evan You" />

Thanks everyone. Gotta go lunch - thanks again. Bye!

<guest name="Guillaume Chau" />

Thanks everyone for your questions! :)

**vicbergquist**

Thank you for a great event! :)

**Coriallis**

Would it make sense for any further questions to go on the repo?

<guest name="Guillaume Chau" />

The repo issues are meant for bug report or feature request only, please ask your questions on Discord or the forum.

**Akumzy**

Thank you Evan and Guillaume

**Tertia**

thank you for answers!

**Elfayer**

Thanks everyone for the participation to this first Q&A event. Thank you to the core team for their time!

**Jacz**

Thanks Evan and Guillaume for your answers and not so terrible jokes. :p

**ride**

Thank you for the Q& and amazing tools Guillaume and Evan!

**tomoko**

Thanks for answers. :)

<guest name="Guillaume Chau" />

Thanks to the moderators as well!

**re:fi.64**

I just missed the whole thing didn't I...

**Moderator**

Yes you did, so next time be sure to join us on time everyone. ;)

<script>
import Guest from '@/components/Guest.vue'

export default {
  head: {
    title: 'Q&A 01 - Vue CLI 3 with Guillaume Chau and Evan You'
  },
  
  components: {
    Guest
  }
}
</script>
