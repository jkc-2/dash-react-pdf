# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Page(Component):
    """A Page component.


Keyword arguments:

- children (list; optional)

- id (string; optional)

- size (string; optional)

- style (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_react_pdf'
    _type = 'Page'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, size=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'size', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'size', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Page, self).__init__(children=children, **args)
