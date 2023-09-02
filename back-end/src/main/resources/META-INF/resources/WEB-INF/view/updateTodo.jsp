<%@ include file="fragments/header.jspf"%>
    <%@ include file="fragments/navigation.jspf"%>
    <div class="container">
        <h3>Update Todo:</h3>
        <form:form method="POST" modelAttribute="todo">
            Username: <form:input type="hidden" path="username"/>
            Description: <form:input type="text" path="description"/>
            <form:errors type="text" path="description" cssClass="text-warning"/>
            Target Date: <form:input type="text" path="targetDate"/>
            <form:input type="hidden" path="id" />
            Done: True<form:radiobutton path="done" value="true"/>
            False<form:radiobutton path="done" value="false"/>
            <input type="submit" class="btn btn-success" value = "Update"/>
        </form:form>
	</div>
	<%@ include file="fragments/footer.jspf"%>
	<script type="text/javascript">
        $('#targetDate').datepicker({
            format: 'yyyy-mm-dd'
        });
    </script>
