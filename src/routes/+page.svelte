<script lang="ts">
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<div class="topnav">
	<h1>The every calendar</h1>
</div>

<p>
	This is a calendar where anyone can dedicate a day to somthing. It can be anything, from a holiday
	to a birthday, or even just a random day that you want to remember. The only rule is that it has
	to be something that you care about. So go ahead and dedicate a day to something that matters to
	you!
</p>

<div class="months">
	{#each months as month, index}
		<div class="month">
			<h2>{month}</h2>
		</div>
	{/each}
</div>

<div
	class="cf-turnstile"
	data-sitekey="0x4AAAAAACzw-393AjCmz36n"
	data-theme="dark"
	data-size="normal"
	data-callback="onSuccess"
></div>

<footer>
	<p>
		Made with ❤️ by <a href="https://bleukiwi.lol">Bluekiwi Dev</a>. View the source code on
		<a href="https://github.com/bluekiwidev/everycalendar">GitHub</a>.
	</p>
</footer>