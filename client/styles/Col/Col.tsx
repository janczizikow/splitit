import styled from "@emotion/styled";
import presets from "../../utils/presets";

interface Props {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xsOffset?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
  xlOffset?: number;
  xsOrder?: number;
  smOrder?: number;
  mdOrder?: number;
  lgOrder?: number;
  xlOrder?: number;
}

const Col = styled.div`
  padding: ${p => `0 ${p.theme.gridGutters}px`};
  margin: ${({ xsOffset }) =>
    xsOffset && `0 ${Math.round((xsOffset / 12) * 100)}%`};
  flex: ${(p: Props) => p.xs && `1 0 ${Math.round((p.xs / 12) * 100)}%`};
  max-width: ${(p: Props) => p.xs && `${Math.round((p.xs / 12) * 100)}%`};
  min-height: 1px;
  order: ${({ xsOrder }) => xsOrder};

  ${presets.sm} {
    margin: ${({ smOffset }) =>
      smOffset && `0 ${Math.round((smOffset / 12) * 100)}%`};
    flex: ${({ sm }) => sm && `1 0 ${Math.round((sm / 12) * 100)}%`};
    max-width: ${({ sm }) => sm && `${Math.round((sm / 12) * 100)}%`};
    order: ${({ smOrder }) => smOrder};
  }

  ${presets.md} {
    margin: ${({ mdOffset }) =>
      mdOffset && `0 ${Math.round((mdOffset / 12) * 100)}%`};
    flex: ${({ md }) => md && `1 0 ${Math.round((md / 12) * 100)}%`};
    max-width: ${({ md }) => md && `${Math.round((md / 12) * 100)}%`};
    order: ${({ mdOrder }) => mdOrder};
  }

  ${presets.lg} {
    margin: ${({ lgOffset }) =>
      lgOffset && `0 ${Math.round((lgOffset / 12) * 100)}%`};
    flex: ${({ lg }) => lg && `1 0 ${Math.round((lg / 12) * 100)}%`};
    max-width: ${({ lg }) => lg && `${Math.round((lg / 12) * 100)}%`};
    order: ${({ lgOrder }) => lgOrder};
  }

  ${presets.xl} {
    margin: ${({ xlOffset }) =>
      xlOffset && `0 ${Math.round((xlOffset / 12) * 100)}%`};
    flex: ${({ xl }) => xl && `1 0 ${Math.round((xl / 12) * 100)}%`};
    max-width: ${({ xl }) => xl && `${Math.round((xl / 12) * 100)}%`};
    order: ${({ xlOrder }) => xlOrder};
  }
`;

Col.defaultProps = {
  xs: 12
};

Col.displayName = "Col";

export default Col;
