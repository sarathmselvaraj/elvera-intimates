(function(){
 const categories = [
  {name:'Everyday Bras',slug:'everyday-bras',tagline:'Support you can settle into',description:'Easy-to-style essentials for everyday wear.'},
  {name:'Wireless Bralettes',slug:'wireless-bralettes',tagline:'Freedom in every layer',description:'Soft structure without a traditional underwire.'},
  {name:'Panties & Briefs',slug:'panties-briefs',tagline:'A softer foundation',description:'Practical everyday staples with considered details.'},
  {name:'Seamless Innerwear',slug:'seamless-innerwear',tagline:'Clean lines, gentle feel',description:'Smooth silhouettes for easy layering.'},
  {name:'Camisoles',slug:'camisoles',tagline:'Your everyday base layer',description:'Simple, versatile pieces for different outfits.'},
  {name:'Shapewear',slug:'shapewear',tagline:'Thoughtful shaping',description:'Flexible silhouettes for outfit-specific layering.'},
  {name:'Sleepwear',slug:'sleepwear',tagline:'Unwind beautifully',description:'Soft pieces designed for relaxing at home.'},
  {name:'Lounge Essentials',slug:'lounge-essentials',tagline:'At ease, by design',description:'Comfort-minded layers for slower moments.'}
 ];
 const names = [
  ['The Softline Everyday Bra','Contour Cotton T-Shirt Bra','Lace Detail Everyday Bra'],
  ['Cloudline Wire-Free Bralette','Everyday Ease Bralette','Soft Form Wireless Bra'],
  ['Cotton Brief in Midnight','Everyday Lace Brief','Airlight High-Rise Brief'],
  ['Second-Skin Smooth Bra','Cleanline Seamless Crop','Invisible-Edge Bralette'],
  ['Satin-Feel Layering Cami','Whisper Soft Camisole','Essential Modal Cami'],
  ['Comfort Form Shorts','Smoothline Layering Brief','Soft-Support Shaping Slip'],
  ['Evening Ease Sleep Top','Moonlight Lounge Chemise','Dreamweave Soft Sleep Set'],
  ['Weekend Soft-Knit Set','Calm Days Lounge Bralette','The Ease Movement Top']
 ];
 const palettes = [
  [['Navy','#263D63'],['Ivory','#F7F2E7'],['Rose','#C88B91']],
  [['Dusty Rose','#C48F9A'],['Cocoa','#98766D'],['Champagne','#D8BE94']],
  [['Midnight','#25324C'],['Sand','#CFB49B'],['Mauve','#AA899B']],
  [['Nude','#C9A495'],['Navy','#263D63'],['Blush','#DAB0B1']],
  [['Pearl','#EFE6E1'],['Dusty Blue','#90A2BA'],['Soft Rose','#C69AA9']],
  [['Slate','#657589'],['Mocha','#A48175'],['Black','#252B36']],
  [['Blush','#D0A1A4'],['Warm Ivory','#F0E5DD'],['Lilac','#AE9BB6']],
  [['Mauve','#AD90A9'],['Navy','#263D63'],['Sand','#C9AF9F']]
 ];
 const fabrics = [
  ['Cotton blend','Cotton poplin','Cotton lace blend'],
  ['Modal blend','Cotton stretch','Soft-touch microfiber'],
  ['Cotton jersey','Cotton lace','Stretch microfiber'],
  ['Microfiber','Nylon-elastane blend','Soft-touch microfiber'],
  ['Satin-feel polyester','Modal blend','Cotton-modal blend'],
  ['Stretch microfiber','Nylon-elastane blend','Stretch knit'],
  ['Modal jersey','Satin-feel weave','Cotton-modal jersey'],
  ['Soft knit','Modal jersey','Stretch cotton']
 ];
 const prices = [[1490,1690,1790],[1390,1590,1690],[690,790,890],[1390,1490,1590],[990,1190,1290],[1290,1490,1590],[1790,1890,2290],[1590,1790,1490]];
 const fits = [
  ['Everyday support','Smooth everyday fit','Lightly structured fit'],
  ['Light support','Relaxed wire-free fit','Soft support'],
  ['Classic mid-rise','Comfort waistband','High rise'],
  ['Smooth-layer fit','Soft silhouette','Flexible second-skin fit'],
  ['Classic layering','Relaxed layering','Body-skimming'],
  ['Gentle shaping','Smooth-layer fit','Light shaping'],
  ['Relaxed','Relaxed','Easy fit'],
  ['Relaxed','Light support','Flexible']
 ];
 const products=[];
 categories.forEach((cat,ci)=>{
  for(let k=0;k<3;k++){
   const id='EV-'+String(ci*3+k+1).padStart(3,'0');
   products.push({id,slug:id.toLowerCase(),name:names[ci][k],category:cat.name,categorySlug:cat.slug,
     description:`A thoughtfully designed ${names[ci][k].toLowerCase()} with a ${fits[ci][k].toLowerCase()} and carefully chosen ${fabrics[ci][k].toLowerCase()}. A considered addition to the ELVÉRA demonstration collection.`,
     fit:fits[ci][k],material:fabrics[ci][k],care:'Wash gently in cool water, follow the sewn-in care label, and air dry away from direct heat.',
     colors:palettes[ci].map(([name,hex])=>({name,hex})),
     sizes:ci===0||ci===1||ci===3?['XS','S','M','L','XL']:['S','M','L','XL','XXL'],
     price:prices[ci][k],stock:(ci===7&&k===2)?0:8+(ci+k)*2,
     image:'assets/images/product-'+String(ci*3+k+1).padStart(2,'0')+'.webp',
     label:k===0?'New edit':k===1?'Popular style':'The essentials',
     newest:100-(ci*3+k),isSecondSkin:[1,3].includes(ci)
   });
  }
 });
 const articles=[
  {slug:'finding-your-everyday-bra-fit',title:'How to Find Your Everyday Bra Fit',category:'Fit & Sizing',image:'journal-fit.webp',excerpt:'A practical starting point for evaluating band comfort, cup coverage and daily wearability.',sections:[['Start with how a bra feels','A useful fit check begins with comfort, not the letter on a label. Move naturally, sit down and raise your arms to understand whether a style stays in place.'],['Understand the band and straps','The band contributes to support and should feel secure without digging. Straps can be adjusted for comfort, but they should not have to carry all the support.'],['Use measurements as a guide','Measure carefully and consult the size chart for the exact product. Brand-specific shapes differ, so a chart is a starting point rather than a promise of fit.'],['Know when to try another style','If seams, cups or the band create consistent discomfort, consider another size or silhouette. Fit should be evaluated without pressure to tolerate an uncomfortable item.']]},
  {slug:'understanding-seamless-innerwear',title:'Understanding Seamless Innerwear',category:'Comfort Notes',image:'journal-seamless.webp',excerpt:'What smooth edges, soft knits and minimal lines can mean for everyday layering.',sections:[['What seamless really means','Seamless garments may be made with fewer stitched joins or with construction intended to produce a smoother outline. The exact result depends on the specific design.'],['Match the fabric to the outfit','Thin, fitted clothing can make edges more noticeable. A smooth-finish piece in a tone suitable for your outfit may help achieve a quieter silhouette.'],['Comfort still comes first','A smooth appearance does not guarantee comfort. Check the waistband, straps and stretch, and avoid forcing a size smaller than your measurements suggest.'],['Care for the finish','Follow the fabric care label and avoid excessive heat where stretch fibers are present. Gentle handling can help preserve a smooth feel.']]},
  {slug:'choosing-wire-free-essentials',title:'Choosing Comfortable Wire-Free Essentials',category:'Comfort Notes',image:'journal-wirefree.webp',excerpt:'Explore different wire-free constructions and identify what works for your routine.',sections:[['Wire-free is a design choice','Wire-free styles avoid a traditional underwire but vary widely in structure, cups and support. Compare actual product features instead of assuming all wire-free pieces perform alike.'],['Consider your everyday routine','Think about how long you wear a garment and whether you prefer light coverage, a flexible silhouette or more shaping.'],['Check the lower edge','A secure underband can help a wireless style sit comfortably. Check for rolling, pinching or slipping during ordinary movement.'],['Try the right variant','Consult the product-specific chart, select an available size and reassess fit as needed.']]},
  {slug:'cotton-vs-modal',title:'Cotton vs Modal: Understanding Fabric Feel',category:'Fabric Guide',image:'journal-cotton.webp',excerpt:'A simple guide to the feel and everyday care of two familiar textile choices.',sections:[['Cotton in everyday essentials','Cotton is a familiar natural fiber often chosen for its soft hand feel. The finish and fabric construction influence the experience.'],['Understanding modal blends','Modal is a regenerated cellulose fiber that can feel smooth and drape gently. Blends may add stretch or alter the texture.'],['Read the actual composition','A product labelled soft-touch may use several fibers. The sewn-in composition and care label offer more reliable guidance than marketing language alone.'],['Choose for your preferences','Evaluate fit, fabric feel, care requirements and practical use before choosing an essential.']]},
  {slug:'caring-for-delicate-innerwear',title:'Caring for Delicate Innerwear',category:'Care Guide',image:'journal-care.webp',excerpt:'Gentle handling and careful drying can help maintain the quality of delicate pieces.',sections:[['Follow the garment label','Always start with the instructions provided on the specific product; fabrics and trims can have different needs.'],['Sort and protect','Separate items by color where appropriate and consider a mesh laundry bag for delicate styles if machine washing is permitted.'],['Avoid unnecessary heat','High heat may affect elastic or delicate components. Air drying is often a considerate option when the label allows it.'],['Store thoughtfully','Lay structured cups in their natural shape and keep decorative fabrics away from sharp items that could snag them.']]},
  {slug:'building-an-essentials-collection',title:'Building an Everyday Essentials Collection',category:'Style Journal',image:'journal-essentials.webp',excerpt:'Build a small, useful wardrobe of pieces that suit your clothing and habits.',sections:[['Start with your actual week','Think about what you wear most often and which items are comfortable enough to reach for repeatedly.'],['Choose a balanced mix','A smooth everyday style, one flexible option and a comfortable lounge choice may serve different occasions without duplicating the same function.'],['Prioritize the right size','Keeping fewer well-fitting items is often more useful than accumulating pieces that are uncomfortable.'],['Refresh gradually','Replace worn or stretched pieces based on their condition rather than following an arbitrary schedule.']]},
  {slug:'innerwear-for-different-outfits',title:'Choosing Innerwear for Different Outfits',category:'Style Journal',image:'journal-underoutfits.webp',excerpt:'How neckline, fabric weight and silhouette shape a practical innerwear choice.',sections:[['Consider the neckline','Look at the garment’s neckline and strap placement before choosing a base layer.'],['Think about fabric weight','Light fabrics and fitted garments can show texture and edges differently. Try the full outfit in good light.'],['Build around movement','Sit, walk and reach while wearing the outfit to check that your chosen layer remains comfortable.'],['Use neutral tones thoughtfully','A neutral is not the same color for everyone. Choose a shade that works under your particular garment and skin tone.']]},
  {slug:'creating-an-everyday-comfort-routine',title:'Creating an Everyday Comfort Routine',category:'Comfort Notes',image:'journal-comfort-routine.webp',excerpt:'A thoughtful guide to selecting, rotating and caring for the essentials you wear most often.',sections:[['Make comfort part of your routine','Begin with the garments you already feel at ease in. Notice which fabrics, straps and silhouettes suit your workday, leisure time or relaxed evenings. A simple routine starts with understanding your own preferences.'],['Choose the right layer for the day','A breathable cotton-blend essential may suit one activity while a seamless or wire-free option may feel better under another outfit. Consider the outer garment, movement and how long you plan to wear the piece.'],['Rotate pieces with care','Allow freshly washed items to dry according to their care labels. Rotating between a few well-fitting essentials can make day-to-day garment care easier without requiring a large collection.'],['Refresh your fit periodically','A garment can feel different after repeated wear or changes in your routine. Revisit the product-specific sizing guidance and check for straps or bands that no longer feel comfortable.'],['Keep your collection intentional','Prioritise pieces that feel good, suit your clothing and can be cared for properly. ELVÉRA’s demonstration size guide and catalogue descriptions can help you compare options without rushing a decision.']]},
  {slug:'understanding-bralette-styles',title:'Understanding Bralette Styles and Support',category:'Fit & Sizing',image:'journal-styles.webp',excerpt:'From soft cups to flexible bands, understand what makes bralette styles different.',sections:[['What defines a bralette','Bralettes often use softer constructions, but designs differ in structure, straps and coverage.'],['Light support and comfort','Some are intended for relaxed everyday wear, while others include firmer bands or shaped panels. Review each product’s fit description.'],['Pay attention to coverage','Cup shapes and necklines affect how a piece sits beneath different tops.'],['Find your fit','Use the ELVÉRA Size Guide as an orientation tool, then assess comfort in the chosen garment.']]}
 ];
 window.ELVERA_DATA={categories,products,articles};
})();
