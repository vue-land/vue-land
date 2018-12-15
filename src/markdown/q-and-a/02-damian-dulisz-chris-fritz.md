# Q&A 02 - Best practices

## Damian Dulisz and Chris Fritz

**Moderator**

Welcome and thanks for joining us today. Let's have a great chat!

This time we're meeting with Chris Fritz, author of official Styleguide and vue-enterprise-boilerplate and Damian Dulisz, author of Vue-Multiselect and other Vue.js libraries. Both are core team members and are here to answer our questions about best practices with Vue.

1. Please tag your questions for our guests with [Q&A] at the beginning.

2. If you see three questions asked please HOLD your question until the guests answer at least one of them. Please keep it only to three unanswered questions at a time.

<guest name="Damian Dulisz" />

Hi!

<guest name="Chris Fritz" />

Hi everyone.

## Events and state management

**puffancs**

What's the point of using RxJS with Vue? Isn't it overlapping in functionality with the reactivity system? (+1 are there any plans to swap the current reactivity system to RxJS?)

<guest name="Damian Dulisz" />

Those two are quite different in how they work. The difference would be in the additional factor that you can find in Rx.js namely time. You can imagine it as a spreadsheet where in Vue the C = A + B, and will always show the current value of A+B, whereas in Rx.js you might track how the C value changed in time. As for swaping the reactivity system – not that I heard of.

<guest name="Chris Fritz" />

I agree with Damian on Rx.js (we actually use Rx together on a project).

<guest name="Damian Dulisz" />

You come streaming in. :)

<guest name="Chris Fritz" />

Ha, was that an Rx joke? :)

---

**Lloyd**

What are your thoughts on using RxJS with Vuex? For example, the RxJS retry operator could be used to retry failed API calls and dispatch Vuex actions/commit mutations on success.

<guest name="Damian Dulisz" />

This is what we do in the project mentioned. If Rx.js makes sense for your use – you can use it with Vuex. Action to start the stream, mutations to commit the output of that stream.

---

**Elfayer**

Should we use Vuex as a request holder such as each actions should always return a Promise?

<guest name="Damian Dulisz" />

I wouldn’t say so – not every action has to be asynchronous.

---

**BogdanL**

Any comments on using only getters and actions inside components vs. also using state and mutations?

<guest name="Damian Dulisz" />

Sadly I’m not sure what would be the point of doing that? If you don’t need that shared state you might not need Vuex at all.

**BogdanL**

The question was whether one should access state / mutations directly, or only through getters / actions. :smiley:

<guest name="Damian Dulisz" />

I personally don't mind calling mutations directly. There might be a chance that in the future Vuex will only have one type of methods (meaning a merge of mutations and actions). As for state – the vue-enterprise-boilerplate has a very nice helper that can be used to easily declare getters that only return a fragment of the state.

---

**JayS**

I've seen some suggest that Vuex should only be treated as global state. Would you agree with this? Is there any benefit of holding a form state in Vuex when I only need it in one component?

<guest name="Damian Dulisz" />

I would say no. If you don’t need it elsewhere, keep it simple, keep it in the local state of a component. Generally if you have the feeling that Vuex makes something harder for you to do, it might be a sign that it shouldn’t be used in that particular case. Often this means forms.

<guest name="Chris Fritz" />

I agree with Damian on that.

---

**kevinmarrec**

Is there a way to do "testing" using the Vuex "Module Registration Pattern" (ref Productivty Boost https://github.com/chrisvfritz/7-secret-patterns). Jest doesn't recognize require.context. Does something to handle that exists or should someone refers a link to make it work ?

<guest name="Chris Fritz" />

The only way I know to do testing there would be either an e2e test, or a unit test that happened to run Webpack and you make assertions against the files it emitted.

But honestly, I never test that part. When it's broken, it's usually pretty obvious - and it's not something you ever change once it's working.

---

**puffancs**

In Vuex if I do not want to write strings for actions what is the recommended way to use it? In Angular with NgRx they started using classes with the actions.

**Moderator**

This question was missed during the event, so let me answer that now. The recommended way to handle that would be to use constants for mutation and action types, as referred in the Vuex documentation: https://vuex.vuejs.org/guide/mutations.html#using-constants-for-mutation-types

---

**Lloyd**

In the Vuex roadmap there is Getting rid of mapXXX helpers via scoped-slot based store consumer component. What does this mean exactly? Wouldn't it be a bit weird to have a component in our template, when Vuex doesn't really have anything to do with the template?

Wouldn't that then mean we have to manually look for events being emitted from this Vuex component? @someStateThatJustChanged="methodToCopyVuexDataToComponentData". How would we even dispatch actions with this component?

<guest name="Chris Fritz" />

These are directions being investigated, but from my own research, I don't think getting rid of the mapX helpers is something we'll end up being a able to do.

**Lloyd**

I don't see why they'd want to be removed anyway, they seem to work perfectly the way they do now! Thanks for answering. :)

---

**chrisng**

Is using this.\$emit('update:model', newValue) inside child component to update parent data considered bad practice?

<guest name="Chris Fritz" />

Nope, not considered a bad practice. The key is that it is that the nature of the interaction is still obvious in both components, so there's no implicit interference, like with patterns such as this.\$parent.

<guest name="Damian Dulisz" />

I agree with Chrtis on this. As long as you manage separate methods for that it should be quite easy to track. However trying to have one "meta" event to handle all changes on the parent data model is asking for problms.

---

**figwit**

What's a best practice pattern for reacting to an event in a component that has only a distant ancestor (basically, non-parent) in common with the component that emitted? I've used a pattern with Vuex that, via an action (say, trigger()) sets some state Boolean, awaits the \$nextTick, and then resets the Boolean.

This gives interested components one tick to react to the Boolean switch via, say, a watch. Is there a simpler or more idiomatic way?

<guest name="Chris Fritz" />

I sometimes like to have an init action in my Vuex modules with a store.watch for this purpose. :)

The init action is automatically called after the store is created, with a little code I demo in vue-enterprise-boilerplate.

**figwit**

Thanks. Yep, I've seen that in your vue-enterprise-boilerplate project. :) That watches in the context of the Vuex module (state) rather than a component (UI) though?

<guest name="Damian Dulisz" />

That’s a tricky question! I guess it might strongly depend on what the event triggers. Try thinking about it not as an event but as a change to the underlaying data and how it affects the state of those components? Also, you might use this.\$root in more simple cases to listen and emit events.

**figwit**

Yep, absolutely. :) I've seen the $root.$on() trick too :smiley: Plenty of options available, I guess! But thinking about it in terms of state/data certainly sounds the first approach one should take.

<guest name="Chris Fritz" />

It depends. But actually, I think what I actually do more often is move more state to Vuex in these cases. If a component is emitting an event, that you want to watch in Vuex, it's probably a good sign that there's something that Vuex should be tracking.

**figwit**

It was more about using Vuex as a common accessor to UI [state] changes across components, rather than necessarily needing to track said state in Vuex.

<guest name="Chris Fritz" />

It's possible i'm still not completely grokking what you mean, but feel free to open a vue-enterprise-boilerplate issue later and I'd be happy flesh this out really thoroughly.

**figwit**

Cheers! I've a working example I can use, so I'll post up.

---

**puffancs**

Should I write services for the data layer, or just have a modular Vuex store and keep all the code in there ?

<guest name="Chris Fritz" />

Either pattern can be scalable. It really depends on how much services logic you have.

<guest name="Damian Dulisz" />

I like my data-layer separated as services (usually to transform the data in and out).(edited)

---

**Phlow**

In vue-enterprise-boilerplate you use CONSTANT_FORM for mutations, and camelCaseForm for actions. But calling them, they are still string-ly typed. Is there a reason for this choice? It seems like best practice would be to give these names definitions, to catch errors at compile time?

<guest name="Chris Fritz" />

I will probably move everything to camelCase. Vuex warns about unregistered actions to mutations being dispatched/committed during runtime, so with tests, I've never had a case of a typo slipping in.

## Other questions

**gusto**

Which level of styleguide and eslint-plugin-vue rules do you use personally and why this one in particular?

<guest name="Damian Dulisz" />

This one is pretty tricky – I used the recommended set without even knowing that I did, simply because it matches my style of writing the code.

<guest name="Chris Fritz" />

Regarding style guide rules, I use the recommended set, but I also define what goes into recommended, so of course I like it... :wink:

---

**johnr**

Is it good practice to write sub-components that aren't necessarily reusable? For example, I have a sub-component that contains template and logic to be specifically used only by two components. Should I be looking to make this sub-component more generic, or is it okay to know that it will only ever be used by these two components?

<guest name="Chris Fritz" />

It's OK. :)

<guest name="Damian Dulisz" />

I would stick with a semi-generic component that only supports those two parent components. It’s always better to extract reusable parts later when you need it, than creating abstractions too soon that might turn out very fragile.

---

**puffancs**

What's the copmile time and dev experience on a big project? Let's say 1000 files. Does the compile time goes up?

<guest name="Chris Fritz" />

Compile time can expect to increase, but the exaxt time really depends on what you're compiling. Some kinds of files and languages are much more expensive than others. Even on a big project though, I've never seen hot reload time increase to more than a few seconds.

Are there any not trivial/well known techniques to keep the main bundle size under 200kb?

<guest name="Damian Dulisz" />

I think this highly depends on your setup. If I’m correct, webpack knows how to manage partial changes so that it won’t compile everything, every time you change a file. This is because when doing development you’re serving the Javascript in a different way (websockets) than on production. Though I might be wrong on the first part...

---

**chrisng**

My CSS in Vue component is growing and it will be hard to point out which rules are unused refactoring/adding new things. It seems like CSS in JS for Vue is not really well adopted?

<guest name="Chris Fritz" />

I personally prefer CSS modules to CSS-in-JS solutions. I don't find there to be much need the way CSS modules can be used directly in the .vue file.

**figwit**

CSS modules + Tailwind ftw :smile:

<guest name="Damian Dulisz" />

Since a few months already I’ve been using tailwindcss and I’m pretty happy with it (though there are still some problems when it comes to composing classes).

---

**puffancs**

In a big Angular project it's quite a problem, and they are about to integrate Bazel to handle this. That's why I was afraid that the situation is the same with Vue.

<guest name="Chris Fritz" />

A LOT can be done, including optimizing images, analyzing your bundle to find and remove unused code, dropping support for older browsers, purging CSS that's not being used, gzipping, etc.

---

**Lloyd**

What are some of the things to look out for when designing reusable components? Any design flaws we should be aware of?

<guest name="Damian Dulisz" />

I would say – trying to force using props where slots would make much more sense. Like with Buttons. You can have a with-icon prop to show an icon. Then introduce a icon-side to define on which side should it be. Or value for the content of the button. Those are all bad ideas that don’t scale.

You should use slots. It might be funny, but quite often that’s the best thing you can do when designing components. Removing responsibilities and introducing slots instead.

<guest name="Chris Fritz" />

I would also add that try to write reusable components in a way that makes as few assumptions about what part of the app it's used in.

That doesn't seem possible with no dependencies. Send me a repro later and I can take a look though. :)

---

**kevinmarrec**

Not really related to Best Practices but what is IYO the best Vue based open source library on the community world to provide "maps" (Vue Google Map, Vue MapBox...)? By best I mean nice features, gently wrapped and which should not break (well tested).

<guest name="Damian Dulisz" />

Sadly I can’t point you towards any of those since I haven’t had the chance to use them.

<guest name="Chris Fritz" />

I'd talk to Divya Sasidharan, which has something cooking that will probably be my favorite once it comes out. In the meantime, vue-googlemaps is also good.

---

**Elfayer**

Do you have a general rule to know when to split the code into smaller component units? I can often end up with long and complex components and seems to fail to find a rule to cut it down accordingly.

<guest name="Chris Fritz" />

My rule is when it seems complex. When it becomes hard for me or others on a team to keep the whole component in my head, I break it out.

<guest name="Damian Dulisz" />

Try to look for responsibilities. If they differ it might be a sign that those can be split into smaller parts. You might also look for reusability – maybe parts of the component could be extracted into non opinionated components? Especially when it comes to interactions.

---

**joestrouth1**

If Vue weren't an option, what would you like to use on your next project?

<guest name="Chris Fritz" />

If Vue weren't an option, I'd go back to React, which I was using for a few years before I found Vue.

<guest name="Damian Dulisz" />

I would probably use React. Probably depending on the project.

**puffancs**

Nobody likes Angular... :(

---

**chrisng**

Does Vue combine all state changes then re-render component for those changes instead of re-render every time any state is updated?

<guest name="Chris Fritz" />

Yep, state changes are batched, so as soon as a synchronous group of state changes is finished, Vue will re-render.

<guest name="Damian Dulisz" />

From what I remember from the source code – Vue will wait for all sync things to update before it re-renders. Then \$nextTick is called.

**chrisng**

Can you guys elaborate on this synchronous group of state changes. All sync things to update. Thanks

<guest name="Damian Dulisz" />

Vue will evaluate all the data inside the component that it can synchronously and then rerender it if anything has changed compared to previous state. All components keep their own state and decide if a re-render is required. This means if a parent updates it doesn’t necessary mean all the children will re-render too.(edited)

---

**Tertia**

React now has a Fragments option to allow multiple root elements in your component. Are there any plans to introduce the same thing to Vue?

<guest name="Damian Dulisz" />

This is already possible with render functions. :)

---

**puffancs**
Should I prefer the template syntax in my components or better stick to render functions ?

<guest name="Damian Dulisz" />

I prefer the template. But there are some things that can be more easily accomplished using pure render functions and this is when I use them. If the component’s template seem to be too complex for templates (meaning I would need to use render functions/jsx) I usually try to rethink the component design since it’s usually a problem with the component rather than template’s limiations.

---

**gusto**

Event bus is an often used approach but we often hear that it's not a recommended one. What are its main downsides and do you personally use it sometimes, do you find valid use cases for it?

<guest name="Damian Dulisz" />

I personally like using an event bus, but quite often it’s not needed since it might be clearer to use parent-child events or Vuex. However in cases like integrating 3rd party libraries like Google maps, an event bus might come in handy and is a valid reason to use it. Also simpler projects that don’t require Vuex might also benefit from using an event bus.

<guest name="Chris Fritz" />

The main downsides of an event bus is you get a lot of state change happening without clear trails of what emitted an event or what changes that event resulted in, making the app increasingly difficult to debug. I never use, for any purpose. For an equally simple pattern, I recommend managing state on a root instance using this.\$root instead.

---

**kevinmarrec**

About testing a Vue application (I use Jest + vue-test-utils), if I have a component which uses like 3 mixins. Should I only test the component and have 100% coverage on all stuff (component + mixins)
Or should I also add additional tests (useless for coverage) around only mixins?

<guest name="Damian Dulisz" />

I would say it depends on how you approach testing. Aiming at 100% coverage? Trying to only cover the most important parts/those likely to break? Also, how do you use those mixins? Are you overriding parts of it?

If no — I would probably test the mixins separately and not care about it when testing components. However if you build upon what the mixin provides – it might be a good idea to test that when testing the component.

**kevinmarrec**

My use case is my mixin includes Vuex actions to change the language of my application. My component test is about clicking on a button to change the language, so it directly test the whole mixin (and I don't override mixins).

<guest name="Damian Dulisz" />

In that case your component tests will probably notify you if something in the mixin breaks.

**kevinmarrec**

Yeah so only testing the component should be fine, I mean if My 100% coverage includes the mixins, if something break around my mixin, as you said, it should break my component test, and this way should decrease the coverage. Thanks for your answers btw. :)

**Moderator**

We will have a separate Q&A event fully dedicated to testing soon. :)

---

**puffancs**

I have a small project and currently have this as vendor bundle size dist/js/chunk-vendors.a37ae2b6.js 796.82 kb / 235.37 kb and I am not sure how could I make it smaller. I have Vuetify, Firebase, Vue-Router so nothing fancy and it's that big now... :(

<guest name="Chris Fritz" />

Oh, Firebase is a huge one. That might be half your bundle. :)

**kevinmarrec**

Firebase is really heavy (3 or 4x Vue if I'm right).

**BogdanL**

You can do vue-cli-service build --report that will generate a dist/report.html with a size breakdown of your used packages.

---

**BogdanL**

From what I remember, CSS modules is only documented in vue-loader documentation. Maybe show it some love in the official documentation, too? :)

<guest name="Chris Fritz" />

It will probably remain out of the official docs, because the integration is very specific to vue-loader and similar libraries. Plus, CSS modules have their own docs. :slight_smile:

---

**puffancs**

Is it possible to have something like async pipe with the vue filter system ?

<guest name="Chris Fritz" />

That probably would not be technically possible in the near future, since renders have to be synchronous.

---

**jacek**

Are there plans (and if yes - what is the approximate timeline) to make Vuex Typescript friendly together with Vue core?

<guest name="Chris Fritz" />

Not that I know of.

**jacek**

Even if there's some kind of checking the name of the action/mutation, there's still no way of type checking of the action's payload, or is there?

<guest name="Chris Fritz" />

To get that type checking, I think you'd have to define a separate function for each action, as a wrapper.

---

**puffancs**

Do you plan to make typescript first class (pun intended) citizen?

<guest name="Damian Dulisz" />

From what I know we want to keep the object-literal syntax as the default one, though I also heard that TypeScript might play a bigger role in 3.0.

<guest name="Damian Dulisz" />

This might in turn improve the TypeScript experience coupled with vue-class-component.

<guest name="Chris Fritz" />

Yes, Vue 3 will be written in Typescript, improving support for Typescript to first-class citizen status!
There may also be some API tweaks that have to be made to fully make it happen, but it's something being investigated and that we're willing to do. :)

**Moderator**

Also Evan confirmed lately that class based syntax will be officially supported.

<guest name="Chris Fritz" />

At that point, you should also no longer need vue-class-component.

---

**Dobromir Hristov**

Could we get a jsdoc example for a Vue component and a Vuex module :smiley: I cant use TS in my project, but I want to have some intellisence. I have done some experiments but hit a wall at computed props.

<guest name="Chris Fritz" />

Contributions would be welcome there! I think it'd be a good issue. :)

<guest name="Damian Dulisz" />

I do use JS Doc for vue-multiselect. Atom <3 supports it.

**Dobromir Hristov**

I will see what I can do and can do a PR later. :)

---

**puffancs**

Is there a robust solution to handle multiple environments? .env only handles one but how do I run my fed against staging or prod or local backend?

<guest name="Chris Fritz" />

In some cases, you might want a second variable, like PROJECT_PHASE, to differentiate between dev staging, staging, prod, etc.

## Last words

**Elfayer**

It is the end of the Q&A. Thank you very much for joining our event.

Thank you Chris and Damian for accepting our invitation and great answers. Thank you all for interesting questions.

The whole transcription of the event will be available on our new official chat website and we hope to invite you soon for the next Q&A session.

<guest name="Damian Dulisz" />

Thanks for the questions! I hope my answers were somewhat helpful. :)

<guest name="Chris Fritz" />

Woohoo! Thank you all for putting this on. :)

**puffancs**

Thanks a lot! It was really helpful!

**joestrouth1**

Thank you for your hard work on Vue and your time spent here today!

**jacek**

ty

**chrisng**

Thanks guys.

**Lenderson**

Thanks guys.

**johnr**

Thank you.

**Dobromir Hristov**

Thanks guys.

**Isaac**

Thank you all, great answers and questions.

**Troopa**

Thanks. :)

**enricu**

Thanks! Where are or will be the chat transcriptions?

**Moderator**

The chat transcript is always available in here #q-and-a channel, since it'll stay as read only until next Q&A.

You can also find them at https://vue-land.js.org.

<script>
import Guest from '@/components/Guest.vue'

export default {
  head: {
    title: 'Q&A 02 - best practices with Damian Dulisz and Chris Fritz'
  },
  
  components: {
    Guest
  }
}
</script>
