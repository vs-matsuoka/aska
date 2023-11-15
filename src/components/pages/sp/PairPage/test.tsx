import { render, screen } from '@testing-library/react';

import PairPage from '.';

describe('<PairPage />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <PairPage
        index={1}
        kirinukiSrc="/SP/Pair_Detail/Kirinuki/s32_Entry_Kirinuki_01.png"
        nameSrc="/SP/Pair_Detail/Name/s32_Pair_name_01.png"
        baseASrc="/SP/Pair_Detail/HNBase/s32_Pair_HNBase_01_A.png"
        baseBSrc="/SP/Pair_Detail/HNBase/s32_Pair_HNBase_01_B.png"
        name="Senpai Club"
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
