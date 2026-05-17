import React from 'react';
import { Button } from '../components/Button';
import { Chip } from '../components/Chip';
import { Input } from '../components/Input';
import { FundCardList, FundCardGrid } from '../components/FundCard';
import { Sidebar } from '../components/Sidebar';
import { 
  Circle, Plus, CheckSquare, Square, 
  House, MagnifyingGlass, User, Gear, Bell, Envelope, 
  Calendar, File, Folder, ArrowRight, ArrowLeft, 
  CaretRight, CaretLeft, Minus, X, Check, 
  WarningCircle, Info, Question, Pulse, 
  ChartPie, TrendUp, CurrencyDollar, Briefcase, List
} from '@phosphor-icons/react';

export const DesignSystem = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const colors = {
    brand: [
      { name: 'Green-20', hex: '#F0FAF4', textColor: 'text-green-900' },
      { name: 'Green-50', hex: '#E6F5EC', textColor: 'text-green-900' },
      { name: 'Green-100', hex: '#C8EBD4', textColor: 'text-green-900' },
      { name: 'Green-200', hex: '#9DD6B4', textColor: 'text-green-900' },
      { name: 'Green-300', hex: '#6CBD8E', textColor: 'text-green-900' },
      { name: 'Green-400', hex: '#3FA36A', textColor: 'text-white' },
      { name: 'Green-500', hex: '#1A7A4A', textColor: 'text-white' },
      { name: 'Green-600', hex: '#156040', textColor: 'text-white' },
      { name: 'Green-700', hex: '#0F4A31', textColor: 'text-white' },
      { name: 'Green-800', hex: '#0A3322', textColor: 'text-white' },
      { name: 'Green-900', hex: '#061F15', textColor: 'text-white' },
    ],
    neutral: [
      { name: 'Neutral-20', hex: '#FAFAF8', textColor: 'text-neutral-900' },
      { name: 'Neutral-50', hex: '#F5F5F2', textColor: 'text-neutral-900' },
      { name: 'Neutral-100', hex: '#EFEFEB', textColor: 'text-neutral-900' },
      { name: 'Neutral-200', hex: '#E5E5E0', textColor: 'text-neutral-900' },
      { name: 'Neutral-300', hex: '#D4D4CC', textColor: 'text-neutral-900' },
      { name: 'Neutral-400', hex: '#A8A89E', textColor: 'text-neutral-900' },
      { name: 'Neutral-500', hex: '#7A7A70', textColor: 'text-white' },
      { name: 'Neutral-600', hex: '#5C5C52', textColor: 'text-white' },
      { name: 'Neutral-700', hex: '#3D3D35', textColor: 'text-white' },
      { name: 'Neutral-800', hex: '#2A2A22', textColor: 'text-white' },
      { name: 'Neutral-900', hex: '#1A1A12', textColor: 'text-white' },
    ],
    semantic: [
      { name: 'Error', hex: '#9B5C63', textColor: 'text-white' },
      { name: 'Success', hex: '#5F8B6D', textColor: 'text-white' },
      { name: 'Info', hex: '#6A7C8F', textColor: 'text-white' },
      { name: 'Warning', hex: '#A08B57', textColor: 'text-white' },
    ]
  };

  return (
    <div className="flex min-h-screen bg-neutral-50 w-full">
      <Sidebar mobileOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col min-h-0 relative w-full">
        {/* Sleek Mobile Header */}
        <header className="md:hidden flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-[#FAFAF8] sticky top-0 z-30">
          <h2 className="font-switzer font-bold text-[20px] text-green-600 tracking-[-0.02em]">Stride</h2>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="text-neutral-500 hover:text-green-600 hover:bg-neutral-100 p-2 rounded-lg transition-colors"
            aria-label="Open navigation menu"
          >
            <List size={22} weight="bold" />
          </button>
        </header>

        <main className="flex-1 px-4 md:px-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <header className="mb-16">
            <h1 className="display-text text-green-700 mb-4">Stride Design System</h1>
            <p className="body-large text-neutral-500">Comprehensive documentation of tokens, atoms, molecules, and organisms for the Antigravity framework. Strictly adhere to these components.</p>
          </header>

          <div className="flex flex-col gap-24">
            {/* FOUNDATIONS */}
            <section>
              <h2 className="heading-1 text-neutral-900 border-b border-neutral-200 pb-4 mb-8">Foundations</h2>
              
              <div className="grid grid-cols-12 gap-5 mb-16">
                <div className="col-span-12 md:col-span-6">
                  <h3 className="heading-2 text-neutral-900 mb-6">Brand Green</h3>
                  <div className="flex flex-col rounded-xl overflow-hidden shadow-sm">
                    {colors.brand.map(c => (
                      <div key={c.name} style={{backgroundColor: c.hex}} className={`flex justify-between items-center px-6 py-4 ${c.textColor}`}>
                        <span className="font-inter font-medium">{c.name}</span>
                        <span className="font-inter font-normal uppercase">{c.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h3 className="heading-2 text-neutral-900 mb-6">Neutrals</h3>
                  <div className="flex flex-col rounded-xl overflow-hidden shadow-sm">
                    {colors.neutral.map(c => (
                      <div key={c.name} style={{backgroundColor: c.hex}} className={`flex justify-between items-center px-6 py-4 ${c.textColor}`}>
                        <span className="font-inter font-medium">{c.name}</span>
                        <span className="font-inter font-normal uppercase">{c.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mb-16">
                <div className="col-span-12">
                  <h3 className="heading-2 text-neutral-900 mb-6">Feedback (Semantic)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {colors.semantic.map(c => (
                      <div key={c.name} className="flex flex-col rounded-xl overflow-hidden shadow-sm">
                        <div style={{backgroundColor: c.hex}} className={`h-24 flex items-center justify-center ${c.textColor}`}>
                           <span className="font-inter font-bold text-xl">{c.name}</span>
                        </div>
                        <div className="bg-white px-4 py-3 flex justify-between items-center border-x border-b border-neutral-200 rounded-b-xl">
                          <span className="label-text text-neutral-600">{c.name}</span>
                          <span className="label-text text-neutral-900 font-mono">{c.hex}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                   <h3 className="heading-2 text-neutral-900 mb-6">Typography</h3>
                   <div className="flex flex-col gap-8 bg-neutral-100 p-8 rounded-xl border border-neutral-200">
                      <div className="grid grid-cols-12 border-b border-neutral-200 pb-4">
                        <div className="col-span-3 text-neutral-500 label-text uppercase">Token</div>
                        <div className="col-span-6 text-neutral-500 label-text uppercase">Preview</div>
                        <div className="col-span-3 text-neutral-500 label-text uppercase">Properties</div>
                      </div>
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-3 label-text text-neutral-600">Display</div>
                        <div className="col-span-6 display-text">Switzer Display</div>
                        <div className="col-span-3 body-text text-neutral-500">64px / Bold / -2%</div>
                      </div>
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-3 label-text text-neutral-600">Heading 1</div>
                        <div className="col-span-6 heading-1">Switzer Heading 1</div>
                        <div className="col-span-3 body-text text-neutral-500">48px / Semibold / -1.5%</div>
                      </div>
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-3 label-text text-neutral-600">Heading 2</div>
                        <div className="col-span-6 heading-2">Switzer Heading 2</div>
                        <div className="col-span-3 body-text text-neutral-500">32px / Medium / -1%</div>
                      </div>
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-3 label-text text-neutral-600">Heading 3</div>
                        <div className="col-span-6 heading-3">Switzer Heading 3</div>
                        <div className="col-span-3 body-text text-neutral-500">24px / Medium / -0.5%</div>
                      </div>
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-3 label-text text-neutral-600">Body Large</div>
                        <div className="col-span-6 body-large">Inter Body Large</div>
                        <div className="col-span-3 body-text text-neutral-500">20px / Regular / 4%</div>
                      </div>
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-3 label-text text-neutral-600">Body Text</div>
                        <div className="col-span-6 body-text">Inter Body Text</div>
                        <div className="col-span-3 body-text text-neutral-500">16px / Regular / 4%</div>
                      </div>
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-3 label-text text-neutral-600">Label & Tags</div>
                        <div className="col-span-6 label-text">Inter Label</div>
                        <div className="col-span-3 body-text text-neutral-500">12px / Medium / 4%</div>
                      </div>
                   </div>
                </div>
              </div>
            </section>

            {/* ATOMS */}
            <section>
              <h2 className="heading-1 text-neutral-900 border-b border-neutral-200 pb-4 mb-8">Atoms</h2>
              
              <div className="grid grid-cols-12 gap-5 mb-16">
                <div className="col-span-12 md:col-span-7">
                  <h3 className="heading-3 text-neutral-900 mb-6">Buttons</h3>
                  <div className="bg-neutral-100 p-8 rounded-xl border border-neutral-200 flex flex-col gap-8">
                     <div className="grid grid-cols-3 gap-6">
                        <div className="flex flex-col gap-4">
                           <span className="label-text text-neutral-500 mb-2">Green Variant</span>
                           <Button leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                           <Button className="bg-green-600 shadow-card" leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                           <Button className="bg-green-700" leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                           <Button disabled leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                        </div>
                        <div className="flex flex-col gap-4">
                           <span className="label-text text-neutral-500 mb-2">Neutral Variant</span>
                           <Button variant="neutral" leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                           <Button variant="neutral" className="bg-neutral-300 shadow-card" leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                           <Button variant="neutral" className="bg-neutral-400 text-neutral-900" leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                           <Button variant="neutral" disabled leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                        </div>
                        <div className="flex flex-col gap-4">
                           <span className="label-text text-neutral-500 mb-2">Ghost Variant</span>
                           <Button variant="ghost" leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                           <Button variant="ghost" className="bg-neutral-100 shadow-card" leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                           <Button variant="ghost" className="bg-neutral-200 text-green-700" leftIcon={<Circle className="w-5 h-5 text-green-700" />} rightIcon={<Circle className="w-5 h-5 text-green-700" />}>Button</Button>
                           <Button variant="ghost" disabled leftIcon={<Circle className="w-5 h-5" />} rightIcon={<Circle className="w-5 h-5" />}>Button</Button>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
                  <div>
                    <h3 className="heading-3 text-neutral-900 mb-6">Chips</h3>
                    <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 flex flex-col gap-4 items-start">
                      <Chip variant="green" leftIcon={<Circle />} rightIcon={<Circle />}>Chip</Chip>
                      <Chip variant="green" active leftIcon={<Circle />} rightIcon={<Circle />}>Chip</Chip>
                      <Chip variant="neutral" leftIcon={<Circle />} rightIcon={<Circle />}>Chip</Chip>
                      <Chip variant="neutral" active leftIcon={<Circle />} rightIcon={<Circle />}>Chip</Chip>
                    </div>
                  </div>

                  <div>
                    <h3 className="heading-3 text-neutral-900 mb-6">Inputs</h3>
                    <div className="bg-white p-8 rounded-xl border border-neutral-200 flex flex-col gap-4">
                      <Input placeholder="Placeholder" leftIcon={<Circle />} rightIcon={<Circle />} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mb-16">
                <div className="col-span-12">
                  <h3 className="heading-3 text-neutral-900 mb-6">Iconography (Phosphor Icons)</h3>
                  <div className="bg-white p-8 rounded-xl border border-neutral-200">
                    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-8">
                      {[
                        { icon: House, name: 'House' },
                        { icon: MagnifyingGlass, name: 'MagnifyingGlass' },
                        { icon: User, name: 'User' },
                        { icon: Gear, name: 'Gear' },
                        { icon: Bell, name: 'Bell' },
                        { icon: Envelope, name: 'Envelope' },
                        { icon: Calendar, name: 'Calendar' },
                        { icon: File, name: 'File' },
                        { icon: Folder, name: 'Folder' },
                        { icon: Pulse, name: 'Pulse' },
                        { icon: ChartPie, name: 'ChartPie' },
                        { icon: TrendUp, name: 'TrendUp' },
                        { icon: CurrencyDollar, name: 'CurrencyDollar' },
                        { icon: Briefcase, name: 'Briefcase' },
                        { icon: ArrowRight, name: 'ArrowRight' },
                        { icon: CaretRight, name: 'CaretRight' },
                        { icon: Plus, name: 'Plus' },
                        { icon: X, name: 'X' },
                        { icon: Check, name: 'Check' },
                        { icon: Info, name: 'Info' },
                      ].map(({ icon: Icon, name }) => (
                        <div key={name} className="flex flex-col items-center gap-2 group cursor-pointer">
                          <div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:text-green-600 group-hover:bg-green-50 group-hover:border-green-200 transition-all">
                            <Icon size={24} />
                          </div>
                          <span className="caption-text text-neutral-400 group-hover:text-neutral-600 transition-colors">{name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-neutral-100">
                       <p className="body-text text-neutral-500 italic">Stride uses Phosphor Icons for all UI and functional iconography. Icons should be 20px in buttons/inputs and 16px in chips/labels.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* MOLECULES */}
            <section>
              <h2 className="heading-1 text-neutral-900 border-b border-neutral-200 pb-4 mb-8">Molecules</h2>
              
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
                  <h3 className="heading-3 text-neutral-900 mb-2">Fund List Item</h3>
                  <div className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-neutral-200">
                    <FundCardList 
                      title="ICICI Prudential Liquid Fund" 
                      meta="Direct Plan · Growth · ~7% p.a." 
                      badge="BEST MATCH" 
                    />
                    <FundCardList 
                      title="ICICI Prudential Liquid Fund" 
                      meta="Direct Plan · Growth · ~7% p.a." 
                      badge="BEST MATCH" 
                    />
                    <FundCardList 
                      title="HDFC Liquid Fund" 
                      meta="Direct Plan · Growth · ~6.8% p.a." 
                    />
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
                  <h3 className="heading-3 text-neutral-900 mb-2">Fund Cards</h3>
                  <div className="grid grid-cols-2 gap-4 bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                    <FundCardGrid 
                      title="Nippon India Taiwan Equity Fund" 
                      meta="Large Cap · Very High Risk" 
                      rating={5}
                      returnPeriod="3Y"
                      returnVal="+53.37%"
                    />
                    <FundCardGrid 
                      title="Nippon India Taiwan Equity Fund" 
                      meta="Large Cap · Very High Risk" 
                      rating={5}
                      returnPeriod="3Y"
                      returnVal="+53.37%"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-16">
                 <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
                  <h3 className="heading-3 text-neutral-900 mb-2">Checkbox List Items</h3>
                  <div className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-neutral-200">
                     <div className="flex flex-col gap-2 p-5 rounded-xl bg-neutral-100 border border-neutral-200 hover:border-green-500 cursor-pointer">
                        <div className="flex items-center gap-4">
                           <Square className="w-6 h-6 text-neutral-500" />
                           <h3 className="heading-3 text-neutral-900">Heading</h3>
                        </div>
                        <p className="body-text text-neutral-500 ml-10">Descriptions</p>
                     </div>
                     <div className="flex flex-col gap-2 p-5 rounded-xl bg-neutral-200 border border-neutral-300">
                        <div className="flex items-center gap-4">
                           <Square className="w-6 h-6 text-neutral-900" />
                           <h3 className="heading-3 text-neutral-900">Heading</h3>
                        </div>
                        <p className="body-text text-neutral-500 ml-10">Descriptions</p>
                     </div>
                     <div className="flex flex-col gap-2 p-5 rounded-xl bg-neutral-100 border border-neutral-200">
                        <div className="flex items-center gap-4">
                           <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                           </div>
                           <h3 className="heading-3 text-neutral-900">Heading</h3>
                        </div>
                        <p className="body-text text-neutral-500 ml-10">Descriptions</p>
                     </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

