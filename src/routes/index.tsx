import { component$, isBrowser, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Collapsible } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";
import { Button } from "~/components/ui";
import { Alert } from "~/components/ui/alert/alert";

export default component$(() => {
  const switchSig = useSignal(false);
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <div>
        <Alert.Root>
          <Alert.Title>Alert</Alert.Title>
          <Alert.Description>Alert Description</Alert.Description>
        </Alert.Root>
        <Button size="sm" onClick$={() => (switchSig.value = !switchSig.value)}>
          Click Me
        </Button>
        {isBrowser && (
          <div class={cn(switchSig.value ? "bg-red-500" : "bg-blue-500")}>
            Browser
          </div>
        )}
      </div>
      <Collapsible.Root>
        <Collapsible.Trigger>Open</Collapsible.Trigger>
        <Collapsible.Content>
          <p>Hello</p>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
