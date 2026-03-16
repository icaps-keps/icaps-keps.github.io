<section id="dates" class="pt-24 fade-in opacity-0 translate-y-8 transition-all duration-1000">
<h1 class="text-4xl font-bold mt-10 mb-10 text-center">Important Dates</h1>

<div class="w-24 h-1 bg-cyan-600 mx-auto mb-10 rounded"></div>

<div class="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700 text-justify tracking-normal">
<p>The reference timezone for all deadlines is UTC-12. That is, as long as there is still some place anywhere in the world where the deadline has not yet passed, you are on time!</p>
</div>

<div class="max-w-3xl mx-auto py-12 px-10">

{% assign today = 'now' | date: "%Y-%m-%d" %}

{% for item in site.data.2026.important_dates %}
{% assign item_date = item.date | date: "%Y-%m-%d" %}

<div class="mb-10 timeline-item flex flex-row items-start gap-4 max-w-md mx-auto">

{% assign color = 'bg-gray-400' %}

{% if item_date == today %}
{% assign color = 'bg-cyan-700 glow' %}
{% endif %}

<!-- Dot -->
<span class="mt-1 w-4 h-4 rounded-full {{ color }} opacity-80"></span>

<!-- Text -->
<div class="flex flex-col text-left">
<h3 class="font-semibold text-lg">{{ item.title }}</h3>
<p class="text-gray-500">
  {% assign d = item.date | date: "%-d" | plus: 0 %}
  {{ item.date | date: "%B" }} {{ d}}<sup>{% if d == 1 or d == 21 or d == 31 %}st
  {% elsif d == 2 or d == 22 %}nd
  {% elsif d == 3 or d == 23 %}rd
  {% else %}th{% endif %}
  </sup>, {{ item.date | date: "%Y" }}
</p>
</div>

</div>

{% endfor %}

</div>
</section>