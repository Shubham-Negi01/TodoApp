<%@ include file="fragments/header.jspf"%>
    <div class="container">
        <h3>Add a Todo:</h3>
        <form:form method="POST" modelAttribute="todo">
            <form:input type="hidden" path="username"/>
            Description: <form:input type="text" path="description"/>
            <form:errors type="text" path="description" cssClass="text-warning"/>
            Target Date: <form:input type="text" path="targetDate"/>
            <form:input type="hidden" path="id" />
            <form:input type="hidden" path="done" />
            <input type="submit" class="btn btn-success" value = "Save"/>
        </form:form>
	</div>
<%@ include file="fragments/footer.jspf"%>
    <script type="text/javascript">
        $('#targetDate').datepicker({
            format: 'yyyy-mm-dd'
        });
    </script>