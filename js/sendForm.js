(function($) {
	$("#contactMeForm").submit((e)=>{
		e.preventDefault();
		$.ajax({
			url: 'https://api.sendgrid.com/v3/mail/send', 
			type: 'post',
			beforeSend: function (xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer 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');
				xhr.setRequestHeader('Content-Type', 'application/json');
			},
			data: {
				personalizations: [{
					to: [{
						email: "gm_chebbah@esi.dz"
					}]
				}],
				from: {
					email: $('#contactFormSenderEmail').val()
				},
				subject: $('#contactFormSubject').val(),
				content: [
					{
						type: "text/plain",
						value: `hello I am ${$('#contactFormSenderName').val()}`
					},
					{
						type: "text/plain",
						value: `${$('#contactFormMessage').val()}`
					}
				]
			}
		})
	})
})(jQuery);