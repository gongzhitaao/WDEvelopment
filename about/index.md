---
layout: default
---

{% include setup %}

# Group Members

<div class="row-fluid">
<ul class="thumbnails offset1 span11">
<div class="row-fluid">
{% for m in MEMBERS %}
<li>
<div class="thumbnail right-caption span4">
<img data-src="holder.js/100x100"
src="{{ ASSET_PATH }}/img/members/{{m}}.jpg"/>
<div class="caption">
{{ m | capitalize}}
</div>
</div>
</li>
{% endfor %}
</div>
</ul>
</div>
