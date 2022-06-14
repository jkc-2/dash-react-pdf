# AUTO GENERATED FILE - DO NOT EDIT

#' @export
document <- function(children=NULL, id=NULL, style=NULL) {
    
    props <- list(children=children, id=id, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Document',
        namespace = 'dash_react_pdf',
        propNames = c('children', 'id', 'style'),
        package = 'dashReactPdf'
        )

    structure(component, class = c('dash_component', 'list'))
}
